import { RoleType, RoleInstance } from "./Role";
import { apoc_roles } from '../templates/apoc.json';

export default class Event {
    constructor() {
        this.roles = [];
        this.days = 1;
        this.title = "FLL tournament";
    }

    populateFLL(types) {
        console.log(types);
        this.days = 4;
        this.title = "Asia Pacific Open Championship";
        apoc_roles.forEach((r) => {
            console.log(r);
            let type = types.find(x => x.shortref === r.type);
            if (type === undefined) type = new RoleType({name: r.type});
            let R = new RoleInstance(type);
            r.count.forEach((v,i) => {R.number(i,v)});
            console.log(R);
            this.roles.push(R);
        });
    }

    setDays(n) {
        this.days = n;
    }
}