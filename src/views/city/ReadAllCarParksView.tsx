import { Parking } from "../../models/classes/ParkingClass";
import {Layout} from "./shared/Layout"
import { parkings} from '../../data/staticDatabase';
//définition du type de paramètre
export type ReadAllParkingsViewProps = {
    parkingArray: Array<Parking>;
}
//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView

export const ReadAllCarParksView =
({ parkingArray }: ReadAllParkingsViewProps,) =>{
  
   const parkingsList=(parking:Parking[])=> {
    var carParksList:String[]=[]
    for (let i = 0; i < parking.length; i++) {
       carParksList.push(parking[i].name)
    }
    return(carParksList)
  }

  const parkingsLink=(parking:Parking[])=> {
    var carParksLink:string[]=[]
    for (let i = 0; i < parking.length; i++) {
       carParksLink.push("/parkings/"+parking[i].name)
    }
    return(carParksLink)
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
export default ReadAllCarParksView;