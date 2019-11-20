global  class inc_CreateDataset {
    public static String status = 'Creating dataset...';
    /*Webservice static void createDatasetListView(Id recId){
        system.debug('Id === '+recId);
        InContact_Report__c reportData = [SELECT Id, method__c, Dataset_Name__c, cURL__c, sDate__c, eDate__c, Base_Url__c, Report_URL__c  FROM InContact_Report__c WHERE Id = :recId];
        String datasetName = reportData.Dataset_Name__c;
        String cUrl = reportData.cURL__c;
        String sDate = reportData.sdate__c;
        String eDate = reportData.eDate__c;
        String baseUrl = reportData.Base_Url__c;
        String reportUrl = reportData.Report_URL__c;
        String method= reportData.method__c;
        String errorId = '';
        if(reportData!=null)
            inc_CreateDataset.insertMetaData(datasetName, '', recId, baseUrl, reportUrl, method, errorId);
        //inc_CreateDataset.insertDataPart( extDataId);
        //inc_CreateDataset.manageData(extDataId);
    }*/
   /* @AuraEnabled
    public static void helloStr(){
        system.debug('helllooooooooo');
    }*/
    
    
    @AuraEnabled
    Webservice static Id createDataset(Id recId, String errorId, String appName){
        system.debug('recId === '+ recId);
        InContact_Reports__mdt reportData = [SELECT Id, fields__c, startDate__c, endDate__c, MetaData_Json__c,  Dataset_Name__c, method__c, Report_URL__c  FROM InContact_Reports__mdt WHERE Id = :recId];
        inc_APIUser_Keys__mdt data = [SELECT resourceUrl__c  FROM inc_APIUser_Keys__mdt WHERE DeveloperName = 'inContact'];
  
        String datasetName = reportData.Dataset_Name__c;
        String baseUrl = data.resourceUrl__c;
        String reportUrl = reportData.Report_URL__c;
        String method= reportData.method__c;
        String metadataJson = '';
        if(reportData.MetaData_Json__c !=  null)
			metadataJson = reportData.MetaData_Json__c ;        
        Id jobID = inc_CreateDataset.insertMetaData(datasetName, appName, recId, baseUrl, reportUrl, method, errorId, metadataJson );
        return jobID;
        //inc_CreateDataset.insertDataPart( extDataId);
        //inc_CreateDataset.manageData(extDataId);
    }
    
    //public static Id extDataId;
    public static String insertMetaData(String datasetName, String appName, Id recId, String baseUrl, String reportUrl, string method, String errorId, String metadataJson){
         //StaticResource sr= [SELECT body from StaticResource WHERE Name = 'ReportXMD'];
        
        //Blob metadataRes = Blob.valueOf(jsonStr);
        InsightsExternalData sobj = new InsightsExternalData();
        //sobj.setType('InsightsExternalData'); 
        sobj.Format='Csv';
        sobj.EdgemartAlias = datasetName;
        sobj.EdgemartContainer = appName;
        system.debug('metadataJson === '+ metadataJson);
        if(metadataJson!='' || metadataJson!=null)
        	sobj.MetadataJson = Blob.valueOf(metadataJson);
        /*List<ContentDocumentLink> docLink= [SELECT ContentDocumentId, LinkedEntityId  FROM ContentDocumentLink where LinkedEntityId=:recId];
        ContentVersion ver;
        if(docLink.size()>0)
          ver = [SELECT VersionData FROM ContentVersion WHERE ContentDocumentId = :docLink[0].ContentDocumentId ];
        //String jsonStr = sr.Body//sr.body.toString();
          if(docLink.size()>0){
            sobj.MetadataJson = ver.VersionData;
            system.debug('sobj.MetadataJson ===== '+ sobj.MetadataJson);
        }*/
        sobj.Operation = 'Overwrite';
        sobj.Action = 'None';
        insert sobj;
         Id extDataId = sobj.Id;
        //return sobj.Id;
        try{
       Id jobID = System.enqueueJob(new inc_EnqueueDataPartInsert(extDataId, recId, baseUrl, reportUrl, method, errorId));
        system.debug('jobID === '+ jobID);
       AsyncApexJob jobInfo = [SELECT Status,NumberOfErrors FROM AsyncApexJob WHERE Id=:jobID];
		system.debug('jobInfo === '+ jobInfo);
        return String.valueOf(jobID);
        }catch(Exception ex){
            //throw ex;
            return 'ERROR';
        }
        
      // inc_CreateDataset.insertDataPart( extDataId, recId, baseUrl, reportUrl, method);
        
    }
    /*@future(callout=true)
    public static void insertDataPart(Id extDataId, Id recId, String baseUrl, String reportUrl, String method){
        status = 'Creating Dataset...';
        InsightsExternalDataPart dataPart = new InsightsExternalDataPart();
        //dataPart.DataFile = inc_datasetCreationHelper.downloadCSV(cUrl);
        //dataPart.DataFile = EncodingUtil.base64Decode(inc_HttpCallOut.httpCallOutJSOFunction(sDate, eDate, baseUrl, reportUrl, method));
        Map<String,Object> resMap = inc_HttpCallOut.httpCallOutJSOFunction(recId, baseUrl, reportUrl, method);
        if((Boolean)resMap.get('SUCCESS')){
            String fileStr = (String)resMap.get('DATA');
            dataPart.DataFile = blob.valueOf(fileStr);
            
            system.debug('dataPart.DataFile===='+dataPart.DataFile);
            dataPart.InsightsExternalDataId = extDataId;
            dataPart.PartNumber= 1;
            insert dataPart;
            inc_CreateDataset.manageData(extDataId, recId);
            status = 'Creating Dataset. Please check status under Data Manager -> Monitor';
        }else{
            status = (String)resMap.get('DATA');
        }
        system.debug('status ==== '+ status);
    }
    public static void manageData(Id  extDataId, Id recId){
        InsightsExternalData data = new InsightsExternalData();
        data.Action = 'Process';
        data.Id = extDataId;
        system.debug('data.Id===='+data.id);
        
        update data;
        if(UserInfo.getSessionId() != null) {
        Cache.Session.put('local.inContact.extDataId', data.id);
            //updateRunningStatus(extDataId,recId);
            system.debug('sdffsdf'+Cache.Session.get('local.inContact.extDataId'));
        }
    }
@AuraEnabled
    public static String updateRunningStatus(){
        String status = '';
        if(UserInfo.getSessionId() != null) {
        If(Cache.Session.contains('local.inContact.extDataId')){
            
            Id extDataId = (Id)Cache.Session.get('local.inContact.extDataId');
            system.debug('extDataId===='+extDataId);
    	InsightsExternalData dataSt = [SELECT status FROM  InsightsExternalData WHERE Id = :extDataId];
        rep.Running_status__c = dataSt.status;
            status = dataSt.status;
        system.debug('status 2=== '+dataSt.status);
        }
        }
        return status;
    }
    */
}