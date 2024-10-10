import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { serveStatic } from 'hono/bun'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { db } from './models/database/databaseInit';
import { cityRoutes } from './routes/cityRoutes';
import { parkingRoutes } from './routes/parkingRoutes';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const app = new Hono();
app.use(trimTrailingSlash())
  .route('/', cityRoutes)
  .route('/', parkingRoutes)
  .route('/', HomeController)

app.use('/static/*', serveStatic({ root: './' }))

export default { 
  port: process.env.PORT,
  fetch: app.fetch, 
}