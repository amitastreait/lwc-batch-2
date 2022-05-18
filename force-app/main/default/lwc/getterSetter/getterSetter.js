import { LightningElement } from 'lwc';

export default class GetterSetter extends LightningElement {

    upperCaseItem = 'TOM';
    message;

    get charOptions(){
        return [
            {label: 'Tom',   value: 'Tom'   },
            {label: 'Jerry', value: 'Jerry' }
        ]
    }

    get itemName(){
        console.log('getter called');
        return this.upperCaseItem;
    }

    set itemName(value){
        this.upperCaseItem = value.toUpperCase();
    }

    handleInputChange = (event) => {
        this.itemName = event.target.value;
    }
    handlePicklistChange = (event) => {
        console.log(event.detail.value);
    }
}