import { Hono } from 'hono'
import {ReadAllCitiesView} from "../views/city/ReadAllCitiesView"
import { cities } from '../data/staticDatabase';
import { ReadAllCitiesViewProps } from '../views/city/ReadAllCitiesView';

export const ReadAllCities = new Hono()
var variable: ReadAllCitiesViewProps={
  citiesArray:cities
}



ReadAllCities.get('/', (c) => {
  const html = ReadAllCitiesView(variable);
  return c.html(html);
});