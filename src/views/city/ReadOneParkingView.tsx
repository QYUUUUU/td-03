import {Layout} from "./shared/Layout"
import { parkings } from '../../data/staticDatabase';
import { Parking } from "../../models/classes/ParkingClass";
export const ReadOneParkingView=
(url:String) =>{
    const getParkingIndex =():number=>{
        
        var returnIndex:number=-1
        for(let i=0;i<parkings.length;i++){
            if(parkings[i].name==url){
                returnIndex=i
            }
        }
        return(returnIndex)
    }
    var actualParkingIndex:number=getParkingIndex()

    const ParkingOuvert=(parking:Parking):string=>{
        if(parking.opened){
            return("Le parking est ouvert ")
        }
        else{
            return("Le parking est fermé")
        }
    }

    const ListeDesPlaces=(parking:Parking):string=>{
        var retour:string=""
        for (let i=0;i<parking.parkIds.length;i++){
            retour=retour+parking.parkIds[i]+" | "
        }
        return(retour)
    }
    
    return(
    <Layout pageTitle="Your Parking">
        <div>
           <h1>Bienvenue au parking {parkings[actualParkingIndex].name}</h1> 
             l'identifiant de la ville où vous êtes est: {parkings[actualParkingIndex].cityId}
            <br/>
            Son id est {parkings[actualParkingIndex].id}
            <br/>
            Son taux horaire est  {parkings[actualParkingIndex].hourlyRate}
            <br/>
            Ce parking dispose de {parkings[actualParkingIndex].numberOfSpots} places 
            <br/>
            L'identifiant de ses places est {ListeDesPlaces(parkings[actualParkingIndex])}
            <br/>
             {ParkingOuvert(parkings[actualParkingIndex])}
            <br/>
            Ses données GPS sont {String(parkings[actualParkingIndex].location.latitude)},{String(parkings[actualParkingIndex].location.latitude)}
           

        </div>
        
    </Layout>
    )
}    