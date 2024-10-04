import {City} from  "../../models/classes/CityClass";
import {Layout} from "./shared/Layout"
//définition du type de paramètre
type ReadAllCitiesViewProps = {
cities: Array<City>;
}
//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView
const ReadAllCitiesView =
({ cities }: ReadAllCitiesViewProps,title:"titre") =>
    <Layout pageTitle="Layout" >
        <div>Contenu à adapter</div>
    </Layout>
export default ReadAllCitiesView;
