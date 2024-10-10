import { PrismaClient } from '@prisma/client';
import { cities, parkings } from '../data/staticDatabase';

const prisma = new PrismaClient();

async function main() {
  for (const city of cities) {
    const createdCity = await prisma.city.upsert({
      where: { id: city.id },
      update: {},
      create: {
        id: city.id,
        name: city.name,
        slug: city.slug,
        location: JSON.stringify(city.location),
        country: city.country,
      },
    });

    console.log(`City ${createdCity.name} inserted`);
  }

  // Seed Parkings
  for (const parking of parkings) {
    const createdParking = await prisma.parking.upsert({
      where: { id: parking.id },
      update: {},
      create: {
        id: parking.id,
        name: parking.name,
        location: JSON.stringify(parking.location),
        numberOfSpots: parking.numberOfSpots,
        opened: parking.opened,
        hourlyRate: parking.hourlyRate,
        city: {
          connect: { id: parking.cityId },
        },
      },
    });

    console.log(`Parking ${createdParking.name} inserted`);
  }
}

main().finally(async () => {
    await prisma.$disconnect();
  });