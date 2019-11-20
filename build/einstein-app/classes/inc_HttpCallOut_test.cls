@isTest
public class inc_HttpCallOut_test {
    
    @testSetup 
    static void setup() {
        /*InContact_Report__c repdata = new InContact_Report__c();
        repdata.ReportId__c = 1;
        repdata.Dataset_Name__c = 'TestDataset';
        insert repdata;
        Report_filter__c filter = new Report_filter__c();
        filter.Name = 'fields';
        filter.Value__c = 'Name,startdate,enddate';
        filter.InContact_Report__c = repdata.Id;
        insert filter;*/
    }
    
    static testmethod void httpCallOutJSOFunctionGetTest(){
        Map<String,String> resHeadMap = new Map<String,String>();
        resHeadMap.put('StatusCode', '200');
        HttpResponse resp = new HttpResponse();
        resp.setBody('{"businessUnitId":28,"lastPollTime":"2019-08-29T09:28:10.130Z","completedContacts":[{"agentSeconds":1,"contactId":221449624,"contactStart":"2019-07-24T05:27:30.093Z","firstName":"saranya","inQueueSeconds":0,"lastName":"r","mediaTypeName":"Call","postQueueSeconds":0,"preQueueSeconds":0,"skillName":"saran_obcall","teamName":"Default","totalDurationSeconds":1}]}');
        String body = resp.getBody();
        RequestMock apiResponse = new RequestMock(200, 'SUCCESS', body, resHeadMap);
        Test.setMock(HttpCalloutMock.class, apiResponse);
        Test.startTest();
       // InContact_Report__c repdata = [SELECt Id FROM InContact_Report__c LIMIT 1];
       // Map<String,Object> resMap = inc_HttpCallOut.httpCallOutJSOFunction(repdata.Id, '', '', 'GET', '');
      Test.stopTest();  
    }
    static testmethod void httpCallOutJSOFunctionPOSTTest(){
        Map<String,String> resHeadMap = new Map<String,String>();
        resHeadMap.put('StatusCode', '200');
        HttpResponse resp = new HttpResponse();
        resp.setBody('{"businessUnitId":28,"lastPollTime":"2019-08-29T09:28:10.130Z","completedContacts":[{"agentSeconds":1,"contactId":221449624,"contactStart":"2019-07-24T05:27:30.093Z","firstName":"saranya","inQueueSeconds":0,"lastName":"r","mediaTypeName":"Call","postQueueSeconds":0,"preQueueSeconds":0,"skillName":"saran_obcall","teamName":"Default","totalDurationSeconds":1}]}');
        String body = resp.getBody();
        RequestMock apiResponse = new RequestMock(200, 'SUCCESS', body, resHeadMap);
        Test.setMock(HttpCalloutMock.class, apiResponse);
        Test.startTest();
       // InContact_Report__c repdata = [SELECt Id FROM InContact_Report__c LIMIT 1];
      //  Map<String,Object> resMap = inc_HttpCallOut.httpCallOutJSOFunction(repdata.Id, '', '', 'POST', '');
      Test.stopTest();  
    }
}