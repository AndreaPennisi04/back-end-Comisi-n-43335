import { fakerDE_CH as faker } from "@faker-js/faker";

//faker.setLocale("en_GH");
// or
faker.locale = "en_GH";
//faker.localeFallback = "es";//esto es lo que tiene solo el profesor, el resto lo agregue de la documentacion

// same as fakerDE_CH
//export const customFaker = new Faker({
// Now multiple fallbacks are supported
//locale: [en_GH,  en, base],
//});

export const generateProduct = () => {
  return {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: faker.datatype.number({
      min: 0,
      max: 500,
    }),
    id: faker.database.mongodbObjectId(),
    description: faker.lorem.paragraph(),
    code: faker.datatype.uuid(),
  };
};
