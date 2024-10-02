import { GPS } from "../types/GPSType"

export class City{
    id: number;
    name: string;
    slug: string;
    parkingIds: string[];// car c'est un uuid
    country: string;
    location: GPS;

    constructor(id: number, name: string, slug: string, parkingIds:string[], country:string, location: GPS){
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.parkingIds = parkingIds;
        this.country = country;
        this.location = location;
    }
}