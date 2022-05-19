import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class QuickActionComponent extends LightningElement {

    handleCloseActionScreen() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}