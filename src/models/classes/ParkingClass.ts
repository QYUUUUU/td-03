import { GPS } from "../types/GPSType"
import { Spot } from "./SpotClass";
import { v4 as uuid, v4 } from 'uuid';

export class Parking{
    id: string=uuid();
    name: string;
    cityId: number;
    location: GPS;
    numberOfSpots: number
    opened: boolean;
    hourlyRate: number;
    parkIds: number[]=[];


    constructor( name: string, cityId: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number){
        this.name = name;
        this.cityId = cityId;
        this.location = location;
        this.opened = opened;
        this.parkIds = this.generateSpots(numberOfSpots);

        if(numberOfSpots >= 0){
            this.numberOfSpots = numberOfSpots;
        }else{
            throw new Error("numberOfSpots must be a positive number");
        }
        if(hourlyRate >= 0){
            this.hourlyRate = hourlyRate;
        }else{
            throw new Error("hourlyRate must be a positive number");
        }
    }

    // Method to generate spots based on the number of spots and associate with this parking
    private generateSpots(numberOfSpots: number): number[] {
        const spots: number[]= [];
        for (let i = 1; i <= numberOfSpots; i++) {
            const spot = new Spot(i, this.id);
            spots.push(i);
            this.parkIds.push(spot.id);  // Adding spot id to parkIds array
        }
        return spots;
    }
}