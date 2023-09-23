public with sharing class AccountSearchLWC {
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String accountName) {
        String searchQuery = 'SELECT Id, Name, AnnualRevenue,BillingState,Rating FROM Account WHERE Name LIKE \'%' + String.escapeSingleQuotes(accountName) + '%\'';
        return Database.query(searchQuery);
    }
}
