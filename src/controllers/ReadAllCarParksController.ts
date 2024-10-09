import { Hono } from 'hono'
import {ReadAllCarParksView, ReadAllParkingsViewProps} from "../views/city/ReadAllCarParksView"
import { parkings } from '../data/staticDatabase';


export const ReadAllCarParks = new Hono()
var variable: ReadAllParkingsViewProps={
  parkingArray:parkings
}



ReadAllCarParks.get('/', (c) => {
  const html = ReadAllCarParksView(variable);
  return c.html(html);
});