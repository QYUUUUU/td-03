import { Hono } from 'hono'
import { ReadOneParking } from '../controllers/ReadOneParkingController'
import { ReadAllCarParks } from '../controllers/ReadAllCarParksController';


export const parkingRoutes = new Hono().basePath('/parkings')
    .get('/:parking', ...ReadOneParking)
    .get('/', ...ReadAllCarParks)