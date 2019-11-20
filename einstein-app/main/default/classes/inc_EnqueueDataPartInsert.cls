public class inc_EnqueueDataPartInsert implements Queueable, Database.AllowsCallouts {
    
    public Id extDataId;
    public Id recId;
    public String baseUrl;
    public String reportUrl;
    public String method;
    public String errorId;
    
    public inc_EnqueueDataPartInsert (Id extDataId, Id recId, String baseUrl, String reportUrl, String method, String errorId) {
        this.extDataId= extDataId;
        this.recId= recId;
        this.baseUrl= baseUrl;
        this.reportUrl= reportUrl;
        this.method= method;
        this.errorId = errorId;
    }
    
    public void execute(QueueableContext context) {
        inContactException__c errRec = new inContactException__c();
        InsightsExternalDataPart dataPart = new InsightsExternalDataPart();
        //dataPart.DataFile = inc_datasetCreationHelper.downloadCSV(cUrl);
        //dataPart.DataFile = EncodingUtil.base64Decode(inc_HttpCallOut.httpCallOutJSOFunction(sDate, eDate, baseUrl, reportUrl, method));
        //get access token from custom setting
        try{
            Map<String,Object> resMap = inc_HttpCallOut.httpCallOutJSOFunction(recId, baseUrl, reportUrl, method);
            if((Boolean)resMap.get('SUCCESS')){
                if(resMap.containsKey('DATAStr')){
                    String fileStr = (String)resMap.get('DATAStr');
                    dataPart.DataFile = blob.valueOf(fileStr);
                }
                if(resMap.containsKey('DATABlob')){
                    String fileStr = (String)resMap.get('DATABlob');
                    dataPart.DataFile = EncodingUtil.base64Decode(fileStr);
                }
                
                system.debug('dataPart.DataFile===='+dataPart.DataFile);
                dataPart.InsightsExternalDataId = extDataId;
                dataPart.PartNumber= 1;
                insert dataPart;
                InsightsExternalData data = new InsightsExternalData();
                data.Action = 'Process';
                data.Id = extDataId;
                system.debug('data.Id===='+data.id);
                
                update data;
                //inc_CreateDataset.manageData(extDataId, recId);
            }else{
                errRec.isError__c = true;
                errRec.Message__c = 'Unable to request inContact API. Please contact your administrator';
                errRec.ReportId__c = errorId;
                insert errRec;
                system.debug('errRec ==== '+ errRec.id);
                //throw new inc_CalloutException('Unable to request inContact API. Please contact your administrator');
            }
        }catch(Exception ex){
            errRec.isError__c = true;
            errRec.Message__c = ex.getMessage();
            errRec.ReportId__c = errorId;
            insert errRec;
            system.debug('errRec ==== '+ errRec.id);
        }
    }
}