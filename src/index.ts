import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { ReadAllCities } from './controllers/ReadAllCitiesController';
import { serveStatic } from 'hono/bun'
import { cities, parkings } from './data/staticDatabase';
import { trimTrailingSlash } from 'hono/trailing-slash'


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = new Hono();
app.use(trimTrailingSlash())

  .route('/', HomeController)
  .route('/cities', ReadAllCities)

app.use('/static/*', serveStatic({ root: './' }))

export default { 
  port: process.env.PORT,
  fetch: app.fetch, 
}