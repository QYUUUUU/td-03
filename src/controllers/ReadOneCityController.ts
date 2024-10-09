import { Hono } from 'hono'
import {ReadOneCityView} from "../views/city/ReadOneCityView"


export const ReadOneCity = new Hono()

ReadOneCity.get('/', (c) =>{

    var url1="aa"
    const html = ReadOneCityView(url1);
    return c.html(html);
  });