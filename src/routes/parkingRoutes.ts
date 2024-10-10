import { Hono } from 'hono'
import { ReadOneParking } from '../controllers/ReadOneParkingController'
import { ReadAllParkings } from '../controllers/ReadAllParkingsController'


export const parkingRoutes = new Hono().basePath('/parkings')
    .get('/:parking', ...ReadOneParking)
    .get('/', ...ReadAllParkings)