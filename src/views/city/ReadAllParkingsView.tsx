import { Parking } from "../../models/classes/ParkingClass";
import {Layout} from "./shared/Layout"
import { parkings} from '../../data/staticDatabase';
//définition du type de paramètre
export type ReadAllParkingsViewProps = {
    parkingArray: Array<Parking>;
}
//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView

export const ReadAllParkingsView =
({ parkingArray }: ReadAllParkingsViewProps,) =>{
  
   const parkingsList=(parking:Parking[])=> {
    var ParkingsList:String[]=[]
    for (let i = 0; i < parking.length; i++) {
       ParkingsList.push(parking[i].name)
    }
    return(ParkingsList)
  }

  const parkingsLink=(parking:Parking[])=> {
    var ParkingsLink:string[]=[]
    for (let i = 0; i < parking.length; i++) {
       ParkingsLink.push("/parkings/"+parking[i].name)
    }
    return(ParkingsLink)
  }
  
  var variable: ReadAllParkingsViewProps={
    parkingArray:parkings
  }
  var parkingLink1=parkingsLink(parkingArray)
  var parkingList1=parkingsList(parkingArray)

  return(
    <Layout pageTitle="All our parkings">
    <div>   
        <h1>Welcome</h1>
        <img src="./static/assets/images/parking.png" alt="EuroPark Parking"/>
            <ul>
              {parkingList1.map((name1:String,index:number) => (
                <li><a href={parkingLink1[index]}>{name1}</a></li>
              ))}
            </ul>
    </div>
    </Layout>
  )
};
export default ReadAllParkingsView;