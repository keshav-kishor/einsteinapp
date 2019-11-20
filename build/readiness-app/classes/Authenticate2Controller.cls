public with sharing class Authenticate2Controller {
    
    public String username { get; set; }
    public Boolean rememberMe { get; set; }
    public String namespacePrefix { get; set; }
    public String authCallbackUrl{ get; set; }
    public String langCode { get; set; }

    public Authenticate2Controller() {
        namespacePrefix = inc_Authenticator.namespacePrefix;
        langCode = UserInfo.getLanguage();
    }
}