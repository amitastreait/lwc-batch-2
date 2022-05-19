import { LightningElement,wire,track } from 'lwc';
import allContact from '@salesforce/apex/AccountController.allContact';
export default class SourceDI extends LightningElement {

    @track options = [];

    @wire(allContact)
    allContact ({error, data}) {
        if (error) {
            // TODO add error logic
            console.log('error', error);
        } else if (data) {
            console.log(data);
            this.options = data.map((e) => ({ label: e.Name, value: e.Id }));  // #3 this approach works
            this.options = JSON.parse(JSON.stringify(this.options));
            console.log('options', this.options);
        }
    }
    handleChange(event){
        let data = event.target.value;
        let label = event.target.options.find(opt=> opt.value === event.detail.value).label;
        const selectedEvent = new CustomEvent('testevent', { detail: { recordId : data , name : label}, });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}