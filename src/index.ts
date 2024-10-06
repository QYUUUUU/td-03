import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { ReadAllCities } from './controllers/ReadAllCitiesController';
import { ReadOneCity } from './controllers/ReadOneCityController';
import { serveStatic } from 'hono/bun'
import { cities, parkings } from './data/staticDatabase';


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = new Hono()
  .route('/', HomeController)
  .route('/cities', ReadAllCities)
  for (let i of cities){
    app.route('/cities/'+ i.slug,ReadOneCity)
  } 

app.use('/static/*', serveStatic({ root: './' }))

export default { 
  port: process.env.PORT,
  fetch: app.fetch, 
}