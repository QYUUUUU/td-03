import { Hono } from 'hono'
import { ReadOneCity } from '../controllers/ReadOneCityController'
import { ReadAllCities } from '../controllers/ReadAllCitiesController'


export const cityRoutes = new Hono().basePath('/cities')
    .get('/:city', ...ReadOneCity)
    .get('/', ...ReadAllCities)