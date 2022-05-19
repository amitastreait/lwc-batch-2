import { api, LightningElement } from 'lwc';

export default class MetaFileComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api message;
    @api type;
    @api currentDate;
    @api noOfExmployee;
    @api color;
}