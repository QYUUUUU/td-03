import {ReadAllCarParksView, ReadAllParkingsViewProps} from "../views/city/ReadAllCarParksView"
import { parkings } from '../data/staticDatabase';
import { createFactory, createMiddleware } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory()

var variable: ReadAllParkingsViewProps={
  parkingArray:parkings
}

export const ReadAllCarParks = factory.createHandlers(logger(), (c) => {
  const html = ReadAllCarParksView(variable);
  return c.html(html)
});
