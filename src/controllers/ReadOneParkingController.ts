import {ReadOneParkingView} from "../views/city/ReadOneParkingView"
import { createFactory, createMiddleware } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory()

export const ReadOneParking = factory.createHandlers(logger(), (c) => {
  const parkingName = String(c.req.param('parking'))
    const html = ReadOneParkingView(parkingName);
    return c.html(html);
});
