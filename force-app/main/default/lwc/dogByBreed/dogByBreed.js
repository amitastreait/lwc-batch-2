import { LightningElement } from 'lwc';

export default class DogByBreed extends LightningElement {

    breedname = 'labrador';
    imageUrl;
    isLoading = false;
    options = [];

    handleInputChange(event) {
        event.preventDefault();
        let value = event.target.value;
        setTimeout(() => {
            this.dogByBreed = value;
            console.log('Breed Name ', this.dogByBreed);
        }, 2000);
    }

    handleChange(event) {
        event.preventDefault();
        this.dogByBreed = event.detail.value;
    }

    connectedCallback() {
        let url = 'https://dog.ceo/api/breeds/list/all';
        this.options = [];
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data && data.message){
                let keys = Object.keys(data.message);
                keys.forEach(element => {
                    this.options = [...this.options, {
                        label: element.toUpperCase(),
                        value: element
                    }];
                });
            }
        })
        .catch(error => {
            console.error(error);
        });
        console.log('options ', this.options);
    }

    set dogByBreed(value){
        this.breedname = value;
        this.imageUrl = undefined;
    }

    get dogByBreed() {
        console.log('Breed Name ', this.breedname);
        if(this.breedname && this.imageUrl === undefined) {
            this.isLoading = true;
            let url = `https://dog.ceo/api/breed/${this.breedname}/images/random`;
            fetch(url)
            .then(response => {
                //console.log(response.json());
                return response.json();
            })
            .then(data => {
                console.log('Data ', data.message);
                this.imageUrl = data.message;
                this.isLoading = false;
            })
            .catch(error => {
                console.error(error);
                this.isLoading = false;
            })
        } else {
            //alert('Please specify a breed');
        }
        return this.breedname.toUpperCase();
    }
}