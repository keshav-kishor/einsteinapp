public class inc_EinsteinPostInstallScript  {

    public void insertReportMetaData(){
        
        Map<String, Object> maptest = new Map<String, Object>();
        maptest.put('Base_Url__c','https://api-b2.incontact.com/inContactAPI/');
        maptest.put('Dataset_Name__c','AgentList1');
        maptest.put('Method__c','GET');
        maptest.put('ReportId__c','1');
        maptest.put('Report_URL__c','services/v16.0/agents');
        CreateUpdateMetadataUtils.createUpdateMetadata('InContact_Reports.AgentList1','AgentList1',maptest);
        
        Map<String, Object> maptest1 = new Map<String, Object>();
        maptest1.put('Base_Url__c','https://api-b2.incontact.com/inContactAPI/');
        maptest1.put('Dataset_Name__c','Completed_Contact_Details');
        maptest1.put('Method__c','GET');
        maptest1.put('ReportId__c','13');
        maptest1.put('Report_URL__c','/services/v8.0/contacts/completed');
        CreateUpdateMetadataUtils.createUpdateMetadata('InContact_Reports.Completed_Contact_Details','Completed_Contact_Details',maptest1);
        
        Map<String, Object> maptest2 = new Map<String, Object>();
        maptest2.put('Base_Url__c','https://api-b2.incontact.com/inContactAPI/');
        maptest2.put('Dataset_Name__c','MediaTypes1');
        maptest2.put('Method__c','GET');
        maptest2.put('ReportId__c','3');
        maptest2.put('Report_URL__c','/services/v1.0/media-types');
        CreateUpdateMetadataUtils.createUpdateMetadata('InContact_Reports.MediaTypes1','MediaTypes1',maptest2);
        
        Map<String, Object> maptest3 = new Map<String, Object>();
        maptest3.put('Base_Url__c','https://api-b2.incontact.com/inContactAPI/');
        maptest3.put('Dataset_Name__c','SkillsSummary1');
        maptest3.put('Method__c','GET');
        maptest3.put('ReportId__c','4');
        maptest3.put('Report_URL__c','/services/v3.0/skills/summary');
        CreateUpdateMetadataUtils.createUpdateMetadata('InContact_Reports.SkillsSummary1','SkillsSummary1',maptest3);
        
        Map<String, Object> maptest4 = new Map<String, Object>();
        maptest4.put('Base_Url__c','https://api-b2.incontact.com/inContactAPI/');
        maptest4.put('Dataset_Name__c','Teams1');
        maptest4.put('Method__c','GET');
        maptest4.put('ReportId__c','2');
        maptest4.put('Report_URL__c','/services/v15.0/teams');
        CreateUpdateMetadataUtils.createUpdateMetadata('InContact_Reports.Teams1','Teams1',maptest4);
		        
    }
    
    public void updateDataflow() {
        inc_internalAPICallout apiCallout = new inc_internalAPICallout();
        String urlStr = '/services/data/v45.0/wave/dataflows/02K3i0000001mlWEAQ';
        String sessionId = UserInfo.getSessionId();
        String body = '{"definition": {}}';
       // apiCallout.patch(urlStr, body, sessionId);
    }
    
}