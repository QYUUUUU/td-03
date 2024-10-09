
import {City} from  "../../models/classes/CityClass";
import {Layout} from "./shared/Layout"
import { cities } from '../../data/staticDatabase';
//définition du type de paramètre
export type ReadAllCitiesViewProps = {
citiesArray: Array<City>;
}
//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView

export const ReadAllCitiesView =
({ citiesArray }: ReadAllCitiesViewProps,) =>{
  
   const CityList=(city:City[])=> {
    var cityList:String[]=[]
    for (let i = 0; i < city.length; i++) {
       cityList.push(city[i].name)
    }
    return(cityList)
  }

  const CityLink=(city:City[])=> {
    var cityLink:string[]=[]
    for (let i = 0; i < city.length; i++) {
       cityLink.push("/cities/"+city[i].slug)
    }
    return(cityLink)
  }
  
  var variable: ReadAllCitiesViewProps={
    citiesArray:cities
  }
  var cityLink1=CityLink(citiesArray)
  var cityList1=CityList(citiesArray)
    return(
    

    
    <Layout pageTitle="All our cities">
    
    <div>   
       
        <h1>Welcome</h1>
        <img src="./static/assets/images/parking.png" alt="EuroPark Parking"/>
       
       
            <ul>
              {cityList1.map((name1:String,index:number) => (
                <li><a href={cityLink1[index]}>{name1}</a></li>
              ))}
            </ul>
        
        
    </div>
    
    
    
    </Layout>
    
  )
    
 
};
export default ReadAllCitiesView;
