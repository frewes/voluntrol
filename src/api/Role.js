export class RoleType {
    constructor({name = "Role"}={}) {
        this.name = name;
    }
}

export class RoleInstance {
    constructor(role) {
        this.role = role;
        this.numbers=[1,1,1,1,1,1];
        this.vols = [["Name 1"],["Name 2"],["Name 3"],["Name 4"],["Name 5"],["Name 6"]];
    }
}

