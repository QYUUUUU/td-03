import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { serveStatic } from 'hono/bun'

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const app = new Hono()
  .route('/', HomeController)

  app.use('/static/*', serveStatic({ root: './static' }))

export default { 
  port: process.env.PORT,
  fetch: app.fetch, 
}