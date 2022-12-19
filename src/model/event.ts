interface IEvent{
    id?: string;
    id_user: string;
    operation: string;
    time: number;
    completeTime: Date;
    id_production: string;
    id_soldier: string;
    id_war: string;
}

export class Event {
    id?: string;
    id_user: string;
    operation: string;
    time: number;
    completeTime: Date;
    id_production: string;
    id_soldier: string;
    id_war: string;

    constructor({id, id_user, operation, time, completeTime, id_production, id_soldier, id_war}: IEvent){
        this.id = id;
        this.id_user = id_user;
        this.operation = operation;
        this.time = time;
        this.completeTime = completeTime;
        this.id_production = id_production;
        this.id_soldier = id_soldier;
        this.id_war = id_war;
    }
}