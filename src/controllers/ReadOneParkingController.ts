import { Hono } from 'hono'
import {ReadOneParkingView} from "../views/city/ReadOneParkingView"


export const ReadOneParking = new Hono()

ReadOneParking.get('/', (c) =>{
    const parkingName = String(c.req.param('parking'))
    const html = ReadOneParkingView(parkingName);
    return c.html(html);
  });