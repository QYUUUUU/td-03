import { Hono } from 'hono'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


export default { 
  port: process.env.PORT, 
  fetch: app.fetch, 
}