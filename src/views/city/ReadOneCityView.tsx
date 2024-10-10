import {Layout} from "./shared/Layout"
import { cities } from '../../data/staticDatabase';
export const ReadOneCityView=
(url:String) =>{
    const getCityIndex =():number=>{
        
        var returnIndex:number=-1
        for(let i=0;i<cities.length;i++){
            if(cities[i].slug==url){
                returnIndex=i
            }
        }
        return(returnIndex)
    }
    var actualCityIndex:number=getCityIndex()
    
    return(
    <Layout pageTitle="Your city">
        <div>
           <h1>Bienvenue à {cities[actualCityIndex].name}</h1> 
            Vous êtes en {cities[actualCityIndex].country}
            <br/>
            Son slug est {cities[actualCityIndex].slug}
            <br/>
            Cette ville a l'identifiant {cities[actualCityIndex].id}
            <br/>
            Son identifiant de parking est {cities[actualCityIndex].parkingIds}
            <br/>
            Ses données GPS sont {String(cities[actualCityIndex].location.latitude)},{String(cities[actualCityIndex].location.latitude)}
           

        </div>
        
    </Layout>
    )
}    