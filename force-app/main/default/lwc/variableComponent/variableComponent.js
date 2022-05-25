import { LightningElement, track, api } from 'lwc';

export default class VariableComponent extends LightningElement {

    // public string recordId;
    greeting = 'Hello';

    /*  SingleItem
        resuable component
        @api person = { address: {} }
    */
    /*
        Not mutabale
    */
    /*
        1. Conver the Object to String - JSON.stringify( person );
        2. Convert the String to Object - JSON.parse( JSON.stringify( person ) );
        3. Store the result into separate variable & make the modifications
    */

    message = 'Hello World';
    age = 30;
    city = 'New York';
    isAdmin = true;
    circle = {
        color : 'red',
        radius : 10,
        type : 'circle'
    }

    @track person = {
        name: 'John',
        age: 30,
        city: 'New York',
        isAdmin: true,
        email : 'admin@gmail.com',
        phone : '1234567890',
        address : {
            street : '123 Main Street',
            city : 'Florida',
        }
    }

    persons = [
        {
            name: 'John',
            age: 30,
            city: 'New York',
            isAdmin: true,
            email : 'admin@gmail.com',
            phone : '1234567890',
            address : {
                street : '123 Main St',
                city : 'New York',
                state : 'NY',
                zip : '10001',
                country : 'USA'
            }
        },
        {
            name: 'John',
            age: 30,
            city: 'New York',
            isAdmin: true,
            email : 'admin@gmail.com',
            phone : '1234567890',
            address : {
                street : '123 Main St',
                city : 'New York',
                state : 'NY',
                zip : '10001',
                country : 'USA'
            }
        },
        {
            name: 'John',
            age: 30,
            city: 'New York',
            isAdmin: true,
            email : 'admin@gmail.com',
            phone : '1234567890',
            address : {
                street : '123 Main St',
                city : 'New York',
                state : 'NY',
                zip : '10001',
                country : 'USA'
            }
        },
        {
            name: 'John',
            age: 30,
            city: 'New York',
            isAdmin: true,
            email : 'admin@gmail.com',
            phone : '1234567890',
            address : {
                street : '123 Main St',
                city : 'New York',
                state : 'NY',
                zip : '10001',
                country : 'USA'
            }
        }
    ]

    changePersonAddress() {
        this.person.address.city = 'New York';
        this.grreeting = 'Hello World';
        this.age = 35;
    }

    @api
    changePersonName() {
        this.person.name = 'John Doe';
    }

    /*
    nameoftheMethod(){

    }

    //ECMA
    nameoftheMethod = () => {

    }

    nameofmethod(prop1, prop2, prop3){

    }

    nameofmethod = (prop1, prop2, prop3) => {

    }
    */

    handleClick = (event) => {
        event.preventDefault();
        let eventTarget = event.target;
        console.log(eventTarget);
        console.log(eventTarget.href);
        console.log(eventTarget.innerText);
        console.log(eventTarget.onclick);
    }

}