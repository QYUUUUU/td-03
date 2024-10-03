import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { ReadAllCities } from './controllers/ReadAllCitiesController';
import { serveStatic } from 'hono/bun'
import { cities, parkings } from './data/staticDatabase';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = new Hono()
  .route('/', HomeController)
  .route('/cities', ReadAllCities)

app.use('/static/*', serveStatic({ root: './' }))

export default { 
  port: process.env.PORT,
  fetch: app.fetch, 
}