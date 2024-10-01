export class Spot{
    id: number;
    parkingId: number;


    constructor(id: number, parkingId: number){
        this.id = id;
        if(parkingId >= 0){
            this.parkingId = parkingId;
        }else{
            throw new Error("numberOfSpots must be a positive number");
        }
    }
}