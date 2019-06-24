export class RoleType {
    constructor({name = "Role"}={}) {
        this.name = name;
    }
}

export class RoleInstance {
    constructor(role) {
        this.role = role;
        this.vols = [["Name 1"],["Name 1"],["Name 1"],["Name 1"],["Name 1"]];
    }

    number(i,v) {
        while (this.vols[i].length < v) {
            this.vols[i].push("Name "+(this.vols[i].length+1));
        }
        while (this.vols[i].length > v) {
            this.vols[i].pop();
        }
    }
}

