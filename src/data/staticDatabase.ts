import { City } from "../models/classes/CityClass";
import { Parking } from "../models/classes/ParkingClass";
import { toSlug } from "../utils/toSlug";
import { generateRandomNumberId } from '../utils/generateRandomNumberId';

// Create an array of City instances
export const cities: City[] = [
    new City(
      generateRandomNumberId(),
      'Aix-en-Provence',
      toSlug('Aix-en-Provence'),
      [],
      'France',
      { latitude: 43.533329, longitude: 5.43333 }
    ),
    new City(
      generateRandomNumberId(),
      'La Spezia',
      toSlug('La Spezia'),
      [],
      'Italie',
      { latitude: 44.238366, longitude: 9.6912326 }
    ),
    new City(
      generateRandomNumberId(),
      'Aix-la-Chapelle',
      toSlug('Aix-la-Chapelle'),
      [],
      'Allemagne',
      { latitude: 50.776351, longitude: 6.083862 }
    ),
    new City(
      generateRandomNumberId(),
      'San Cristóbal de La Laguna',
      toSlug('San Cristóbal de La Laguna'),
      [],
      'Espagne',
      { latitude: 28.487180709838867, longitude: -16.313879013061523 }
    ),
    new City(
      generateRandomNumberId(),
      'Newcastle upon Tyne',
      toSlug('Newcastle upon Tyne'),
      [],
      'Angleterre',
      { latitude: 54.9738474, longitude: -1.6131572 }
    )
  ];
  
  // Create an array of Parking instances
  export const parkings: Parking[] = [
    new Parking(generateRandomNumberId(), 'A', cities[0].id, cities[0].location, 100, true, 4.5),
    new Parking(generateRandomNumberId(), 'B', cities[1].id, cities[1].location, 50, true, 3),
    new Parking(generateRandomNumberId(), 'C', cities[1].id, cities[1].location, 80, true, 2.5),
    new Parking(generateRandomNumberId(), 'D', cities[2].id, cities[2].location, 40, true, 2.8),
    new Parking(generateRandomNumberId(), 'E', cities[3].id, cities[3].location, 70, true, 3.1),
    new Parking(generateRandomNumberId(), 'F', cities[4].id, cities[4].location, 60, true, 2.4),
    new Parking(generateRandomNumberId(), 'G', cities[4].id, cities[4].location, 90, true, 3.2)
  ];
  
  // Associate parkingIds with cities
  cities[0].parkingIds = [parkings[0].id];
  cities[1].parkingIds = [parkings[1].id, parkings[2].id];
  cities[2].parkingIds = [parkings[3].id];
  cities[3].parkingIds = [parkings[4].id];
  cities[4].parkingIds = [parkings[5].id, parkings[6].id];