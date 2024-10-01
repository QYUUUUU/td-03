import { GPS } from "../types/GPSType"

export class City{
    id: number;
    name: string;
    slug: string;
    parkingIds: number[];
    country: string;
    location: GPS;

    constructor(id: number, name: string, slug: string, parkingIds:number[], country:string, location: GPS){
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.parkingIds = parkingIds;
        this.country = country;
        this.location = location;
    }
}