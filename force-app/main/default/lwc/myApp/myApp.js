// c/myApp.js
import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningPrompt from 'lightning/prompt';
import LightningConfirm from 'lightning/confirm';
export default class MyApp extends LightningElement {
    async handleAlertClick() {
        await LightningAlert.open({
            message: 'this is the alert message',
            theme: 'error', // a red theme intended for error states
            label: 'Error!', // this is the header text
        });
        //Alert has been closed
        const result = await LightningConfirm.open({
            message: 'this is the prompt message',
            variant: 'headerless',
            label: 'this is the aria-label value',
            // setting theme would have no effect
        });
        LightningPrompt.open({
            message: 'this is the prompt message',
            //theme defaults to "default"
            label: 'Please Respond', // this is the header text
            defaultValue: 'initial input value', //this is optional
        }).then((result) => {
            //Prompt has been closed
            //result is input text if OK clicked
            //and null if cancel was clicked
        });
    }
}