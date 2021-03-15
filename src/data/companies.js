import faker from "faker";

let _companies = [];

for (let i = 0; i < 30; i++) {
  _companies.push({
    id: i,
    companyName: faker.company.companyName(),
    timeZone: faker.address.timeZone(),
    country: faker.address.country(),
    city: faker.address.city(),
    streetAddress: faker.address.streetAddress(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  });
}

export const companies = _companies;
