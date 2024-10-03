import { Hono } from 'hono'

export const HomeController = new Hono()
  .get('/', (c) => c.html(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"/>
      <style>
      img{
        width:250px;
        height:auto;
      }
      </style>
      <title>Welcome to EuroPark</title>
    </head>
    <body>
      <h1>Welcome to EuroPark !</h1>
      <img src="./static/assets/images/parking.png" alt="EuroPark Parking">
      <p>
        Save time and money with EuroPark! Enjoy a 100% contactless parking
        experience for a short or long duration in our car parks in Europe!
      </p>
      <nav>
        <ul>
          <li><a href="/cities">Our Cities</a></li>
          <li><a href="/parkings">Our Car Parks</a></li>
        </ul>
      </nav>
    </body>
    </html>`));