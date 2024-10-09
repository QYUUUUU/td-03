import { Hono } from 'hono'
import {ReadOneCityView} from "../views/city/ReadOneCityView"


export const ReadOneCity = new Hono()

ReadOneCity.get('/', (c) =>{
    const cityName = String(c.req.param('city'))
    const html = ReadOneCityView(cityName);
    return c.html(html);
  });