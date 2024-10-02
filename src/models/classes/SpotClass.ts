export class Spot{
    id: number; 
    parkingId: string;// it have to be a string because UUID generate code with numbers but also letters 


    constructor(id: number, parkingId: string){
        this.id = id;
        if(parkingId != ""){ //in case UUID can't be generated 
            this.parkingId = parkingId;
        }else{
            throw new Error("numberOfSpots must be a positive number");
        }
    }
}