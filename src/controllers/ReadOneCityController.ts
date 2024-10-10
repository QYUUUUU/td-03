import { Hono } from 'hono'
import { createFactory, createMiddleware } from 'hono/factory'
import {ReadOneCityView} from "../views/city/ReadOneCityView"
import { logger } from 'hono/logger'

const factory = createFactory()

export const ReadOneCity = factory.createHandlers(logger(), (c) => {
  const cityName = String(c.req.param('city'))
  const html = ReadOneCityView(cityName);
  return c.html(html);
})
