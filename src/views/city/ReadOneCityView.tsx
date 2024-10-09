import {Layout} from "./shared/Layout"
import { cities } from '../../data/staticDatabase';
export const ReadOneCityView=
(url:String) =>{
    // const getCityIndex =():number=>{
    //     const loc=useLocation()
    //     var returnIndex:number=-1
    //     for(let i=0;i<cities.length;i++){
    //         if(cities[i].slug===loc.pathname){
    //             returnIndex=i
    //         }
    //     }
    //     return(returnIndex)
    // }
    // var actualCityIndex:number=getCityIndex()
    
    return(
    <Layout pageTitle="Your city">
        <div>
            <p> L'url est {url}</p>
        </div>
        
    </Layout>
    )
}    