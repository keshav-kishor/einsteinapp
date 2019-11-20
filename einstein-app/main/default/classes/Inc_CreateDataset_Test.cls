@isTest
public class Inc_CreateDataset_Test {

    @testSetup 
    static void setup() {
       /* InContact_Report__c repdata = new InContact_Report__c();
        repdata.ReportId__c = 1;
        repdata.Dataset_Name__c = 'TestDataset';
        insert repdata;
        Report_filter__c filter = new Report_filter__c();
        filter.Name = 'fields';
        filter.Value__c = 'Name,startdate,enddate';
        filter.InContact_Report__c = repdata.Id;
        insert filter;
        */
       /* UserOptionsInternal__c userOpt = new UserOptionsInternal__c( SetupOwnerId = UserInfo.getUserId() );
        userOpt.AccessToken1__c = 'dgfdfgdfgdfgdfgdf';
        userOpt.AccessToken2__c = 'retertertert';
        userOpt.AccessToken3__c = 'dgfdfgdfgdfgdfg';
        upsert userOpt;*/
    }
    
    static testmethod void createDatasetTest(){
        Map<String,String> resHeadMap = new Map<String,String>();
        resHeadMap.put('StatusCode', '200');
        HttpResponse resp = new HttpResponse();
        resp.setBody('{"businessUnitId":28,"lastPollTime":"2019-08-29T09:28:10.130Z","completedContacts":[{"agentSeconds":1,"contactId":221449624,"contactStart":"2019-07-24T05:27:30.093Z","firstName":"saranya","inQueueSeconds":0,"lastName":"r","mediaTypeName":"Call","postQueueSeconds":0,"preQueueSeconds":0,"skillName":"saran_obcall","teamName":"Default","totalDurationSeconds":1}]}');
        String body = resp.getBody();
        RequestMock apiResponse = new RequestMock(200, 'SUCCESS', body, resHeadMap);
        Test.setMock(HttpCalloutMock.class, apiResponse);
        Test.startTest();
        InContact_Reports__mdt repdata = [SELECt Id FROM InContact_Reports__mdt LIMIT 1];
        Id testId =  inc_CreateDataset.createDataset(repdata.id, '', 'First_Call_Resolution');
      Test.stopTest();  
    }

}