// accountSearchLWC.js
import { LightningElement, track } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountSearchLWC.searchAccounts';

const columns = [
    { label: 'Account ID', fieldName: 'Id', type: 'text' },
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
    { label: 'Billing State', fieldName: 'BillingState', type: 'text' },
    { label: 'Rating', fieldName: 'Rating', type: 'text' }
];

export default class AccountSearchLWC extends LightningElement {
    @track accountName = '';
    @track accountRecords = [];
    columns = columns;

    handleAccountNameChange(event) {
        this.accountName = event.target.value;
    }

    handleSearch() {
        searchAccounts({ accountName: this.accountName })
            .then(result => {
                this.accountRecords = result;
            })
            .catch(error => {
                console.error('Error fetching account records', error);
            });
    }
}
