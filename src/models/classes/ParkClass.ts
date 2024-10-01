export class Park{
    id: number;
    spotId: string;
    startedAt: Date;
    endedAt: Date;
    price: number;
    paid: boolean;


    constructor(id: number, spotId: string, startedAt: Date, endedAt: Date, price: number, paid: boolean,){
        this.id = id;
        this.spotId = spotId;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
        this.price = price;
        this.paid = paid;
    }
}