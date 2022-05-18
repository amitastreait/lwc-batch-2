import { LightningElement } from 'lwc';

export default class TomJerry extends LightningElement {

    showTomJerry = true; // if true display Tom if false display Jerry

    toggeValues = () => {
        this.showTomJerry = !this.showTomJerry;
        // true = false,
        // false = true
    }

    handlePicklistChange = (event) => {
        console.log(event.detail.value);
    }
}