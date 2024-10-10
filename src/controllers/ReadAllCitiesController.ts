import {ReadAllCitiesView} from "../views/city/ReadAllCitiesView"
import { cities } from '../data/staticDatabase';
import { ReadAllCitiesViewProps } from '../views/city/ReadAllCitiesView';
import { createFactory, createMiddleware } from 'hono/factory'
import { logger } from 'hono/logger'

const factory = createFactory()

export const ReadAllCities = factory.createHandlers(logger(), (c) => {
  const html = ReadAllCitiesView(variable);
  return c.html(html)});

var variable: ReadAllCitiesViewProps={
  citiesArray:cities
}