import { RoleInstance, RoleType } from "./Role";
import { roles } from './fll.json';

export default class Event {
    constructor() {
        this.roles = [];
        this.days = 1;
        this.title = "FLL tournament";
    }

    populateFLL() {
        roles.forEach((r) => this.roles.push(new RoleInstance(r)));
    }

    setDays(n) {
        this.days = n;
    }
}