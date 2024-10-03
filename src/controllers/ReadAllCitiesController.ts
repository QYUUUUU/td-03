import { Hono } from 'hono'
import { cities, parkings } from '../data/staticDatabase';

const cityListItems = cities.map(city => `
  <li>
    <strong>City:</strong> ${city.name} <br/>
    <strong>ID:</strong> ${city.id} <br/>
    <strong>Slug:</strong> ${city.slug} <br/>
    <strong>Country:</strong> ${city.country} <br/>
    <strong>Parking IDs:</strong> ${city.parkingIds.join(', ')} <br/>
    <strong>Location:</strong> Latitude: ${city.location.latitude}, Longitude: ${city.location.longitude}
  </li>
`).join('');

export const ReadAllCities = new Hono()
  .get('/', (c) => c.html(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to EuroPark</title>
    </head>
    <body>
      <h1>City</h1>
      <body>
      <h1>List of Cities</h1>
      <ul>
        ${cityListItems}
      </ul>
    </body>
    </body>
    </html>`));