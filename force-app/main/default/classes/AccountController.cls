public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> searchAccount(String skey){
        try {
            String key = '%'+skey+'%';
            System.debug('key ' + key);
            System.debug('query ' + [SELECT Id,Name from Account where Name like: key WITH SECURITY_ENFORCED]);
            return [SELECT Id,Name from Account where Name like: key WITH SECURITY_ENFORCED];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static List<Account> allAccount(){
        return [SELECT Id,Name from Account WITH SECURITY_ENFORCED LIMIT 10];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> allContact() {
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}