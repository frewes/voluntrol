export class Role {
    constructor({name = "Role"}={}) {
        this.name = name;
    }
}

export class RoleInstance {
    constructor(role) {
        this.role = role;
        this.numbers=[1,1,1,1,1,1];
        this.vols = [];
    }
}

