import { Hono } from 'hono'
import {ReadOneCityView} from "../views/city/ReadOneCityView"

export const ReadOneCity = new Hono()

ReadOneCity.get('/', (c) => {
    const html = ReadOneCityView();
    return c.html(html);
  });