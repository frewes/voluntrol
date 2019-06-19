export default class Volunteer {
    constructor({name="Name", phone="--", email="--",category="--",history=[],dietary="--",wwcc="--"}={}) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.category = category;
        this.history = history;
        this.dietary = dietary;
        this.wwcc = wwcc;
    }
}