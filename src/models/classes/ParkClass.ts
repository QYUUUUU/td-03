import { v4 as uuid, v4 } from 'uuid';
export class Park{
    id: string=uuid();
    spotId: string;
    startedAt: Date;
    endedAt: Date;
    price: number;
    paid: boolean;


    constructor( spotId: string, startedAt: Date, endedAt: Date, price: number, paid: boolean,){
        this.spotId = spotId;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.price = price;
        this.paid = paid;
    }
}