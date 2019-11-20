@isTest
public class inc_EnqueueDataPartInsert_Test {
    
    @testSetup 
    static void setup() {
       /*  InContact_Report__c repdata = new InContact_Report__c();
        repdata.ReportId__c = 1;
        repdata.Dataset_Name__c = 'TestDataset';
        insert repdata; */
       /* Report_filter__c filter = new Report_filter__c();
        filter.Name = 'fields';
        filter.Value__c = 'Name,startdate,enddate';
       // filter.InContact_Report__c = repdata.Id;
        insert filter;*/
        
       // einsteinPostInstallScript postIns = new einsteinPostInstallScript();
        //postIns.insertReportMetaData();
    }
    
    
    static testmethod void inc_EnqueueDataPartInsertTest() {
        //startTest/stopTest block to force async processes to run in the test.
       //InsightsExternalData obj = [Select Id FROM InsightsExternalData LIMIT 1];
       // InContact_Report__c repdata = [SELECT Id FROM InContact_Report__c LIMIT 1];
        Map<String,String> resHeadMap = new Map<String,String>();
        resHeadMap.put('StatusCode', '200');
        HttpResponse resp = new HttpResponse();
        resp.setBody('{"businessUnitId":28,"lastPollTime":"2019-08-29T09:28:10.130Z","completedContacts":[{"agentSeconds":1,"contactId":221449624,"contactStart":"2019-07-24T05:27:30.093Z","firstName":"saranya","inQueueSeconds":0,"lastName":"r","mediaTypeName":"Call","postQueueSeconds":0,"preQueueSeconds":0,"skillName":"saran_obcall","teamName":"Default","totalDurationSeconds":1}]}');
        String body = resp.getBody();
        RequestMock apiResponse = new RequestMock(200, 'SUCCESS', body, resHeadMap);
        Test.setMock(HttpCalloutMock.class, apiResponse);
        Test.startTest(); 
        
        InsightsExternalData sobj = new InsightsExternalData();
        //sobj.setType('InsightsExternalData'); 
        sobj.Format='Csv';
        sobj.EdgemartAlias = 'TestDataset';
        sobj.EdgemartContainer = 'Sales_Productivity';
        
        sobj.Operation = 'Overwrite';
        sobj.Action = 'None';
        insert sobj;
        
       // System.enqueueJob(new inc_EnqueueDataPartInsert(sobj.Id, repdata.Id, '', '', 'GET', ''));
        Test.stopTest();
 
    }
    static testmethod void inc_DataBlobEnqueueDataPartInsertTest() {
        //startTest/stopTest block to force async processes to run in the test.
       //InsightsExternalData obj = [Select Id FROM InsightsExternalData LIMIT 1];
       // InContact_Report__c repdata = [SELECT Id FROM InContact_Report__c LIMIT 1];
        Map<String,String> resHeadMap = new Map<String,String>();
        resHeadMap.put('StatusCode', '200');
        HttpResponse resp = new HttpResponse();
        resp.setBody('{"businessUnitId":28,"SUCCESS":true,lastPollTime":"2019-08-29T09:28:10.130Z","completedContacts":[{"agentSeconds":1,"DATABlob":221449624,"contactStart":"2019-07-24T05:27:30.093Z","firstName":"saranya","inQueueSeconds":0,"lastName":"r","mediaTypeName":"Call","postQueueSeconds":0,"preQueueSeconds":0,"skillName":"saran_obcall","teamName":"Default","totalDurationSeconds":1}]}');
        String body = resp.getBody();
        RequestMock apiResponse = new RequestMock(200, 'SUCCESS', body, resHeadMap);
        Test.setMock(HttpCalloutMock.class, apiResponse);
        Test.startTest(); 
        
        InsightsExternalData sobj = new InsightsExternalData();
        //sobj.setType('InsightsExternalData'); 
        sobj.Format='Csv';
        sobj.EdgemartAlias = 'TestDataset';
        sobj.EdgemartContainer = 'Sales_Productivity';
        
        sobj.Operation = 'Overwrite';
        sobj.Action = 'None';
        insert sobj;
        
        //System.enqueueJob(new inc_EnqueueDataPartInsert(sobj.Id, repdata.Id, '', '', 'GET', ''));
        Test.stopTest();
 
    }
    static testmethod void inc_ExceptionEnqueueDataPartInsertTest() {
        //startTest/stopTest block to force async processes to run in the test.
       //InsightsExternalData obj = [Select Id FROM InsightsExternalData LIMIT 1];
      //  InContact_Report__c repdata = [SELECT Id FROM InContact_Report__c LIMIT 1];
        Map<String,String> resHeadMap = new Map<String,String>();
        resHeadMap.put('StatusCode', '400');
        HttpResponse resp = new HttpResponse();
        resp.setBody('{"businessUnitId":28,"lastPollTime":"2019-08-29T09:28:10.130Z","completedContacts":[{"agentSeconds":1,"contactId":221449624,"contactStart":"2019-07-24T05:27:30.093Z","firstName":"saranya","inQueueSeconds":0,"lastName":"r","mediaTypeName":"Call","postQueueSeconds":0,"preQueueSeconds":0,"skillName":"saran_obcall","teamName":"Default","totalDurationSeconds":1}]}');
        String body = resp.getBody();
        RequestMock apiResponse = new RequestMock(400, 'ERROR', body, resHeadMap);
        Test.setMock(HttpCalloutMock.class, apiResponse);
        Test.startTest(); 
        
        InsightsExternalData sobj = new InsightsExternalData();
        //sobj.setType('InsightsExternalData'); 
        sobj.Format='Csv';
        sobj.EdgemartAlias = 'TestDataset';
        sobj.EdgemartContainer = 'Sales_Productivity';
        
        sobj.Operation = 'Overwrite';
        sobj.Action = 'None';
        insert sobj;
        
       // System.enqueueJob(new inc_EnqueueDataPartInsert(sobj.Id, repdata.Id, '', '', 'GET', ''));
        Test.stopTest();
 
    }
}