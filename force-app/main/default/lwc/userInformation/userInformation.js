import { LightningElement } from 'lwc';

export default class UserInformation extends LightningElement {
    /* The Example JSON file */
    person = {
        "First Name": "Rack's",
        "Last Name": "Jackon",
        "Gender": "man",
        "Age": 24,
        "Street Address": "126",
        "City": "San Jone",
        "State": "CA",
        "PostalCode": "394221",
        "Phone Type": "home",
        "Phone Number": "7383627627"
    }

    finalOutcome = [];

    handleClick() {
        for(let key in this.person){
            this.finalOutcome = [...this.finalOutcome, { key : key, value : this.person[key] } ];
        }
        console.log(this.finalOutcome);
    }
}