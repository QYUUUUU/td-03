import {ReadAllParkingsView, ReadAllParkingsViewProps} from '../views/city/ReadAllParkingsView';
import { parkings } from '../data/staticDatabase';
import { createFactory, createMiddleware } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory()

var variable: ReadAllParkingsViewProps={
  parkingArray:parkings
}

export const ReadAllParkings = factory.createHandlers(logger(), (c) => {
  const html = ReadAllParkingsView(variable);
  return c.html(html)
});
