import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { ReadAllCities } from './controllers/ReadAllCitiesController';
import { ReadOneCity } from './controllers/ReadOneCityController';
import { serveStatic } from 'hono/bun'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { db } from './models/database/databaseInit';
import { cities, parkings } from './data/staticDatabase';
import { ReadAllCarParks } from './controllers/ReadAllCarParksController';
import { ReadOneParking } from './controllers/ReadOneParkingController';


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const superr=db;
const app = new Hono();
app.use(trimTrailingSlash())

  .route('/', HomeController)
  .route('/cities', ReadAllCities)
  .route('/cities/:city', ReadOneCity)
  .route('/carParks', ReadAllCarParks)
  .route('/carParks/:parking', ReadOneParking)

app.use('/static/*', serveStatic({ root: './' }))

export default { 
  port: process.env.PORT,
  fetch: app.fetch, 
}