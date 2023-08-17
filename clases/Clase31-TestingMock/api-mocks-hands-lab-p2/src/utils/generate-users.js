import { fakerDE_CH as faker } from "@faker-js/faker";
import { generateProduct } from "./generate-products.js";

//faker.setLocale("en_GH");
// or
faker.locale = "en_GH";
//faker.localeFallback = "es"; //esto es lo que tiene solo el profesor, el resto lo agregue de la documentacion

// same as fakerDE_CH
//export const customFaker = new Faker({
// Now multiple fallbacks are supported
/////locale: [en_GH, en, base],
//});

export const generateUser = () => {
  let numOfProd = parseInt(faker.random.numeric(1, { bannedDigits: ["0"] })); //Esto es para excluir algunos numeros (1, { bannedDigits: ["0"] }) por ejemplo quiero que empiece de 1 y excluya el 0. Osea seria de 1 digito que empieza de 1 y excluye el 0.
  let products = [];
  for (let index = 0; index < numOfProd; index++) {
    products.push(generateProduct());
  }

  return {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    role: faker.helpers.arrayElement(["cliente", "vendedor"]),
    premium: faker.datatype.boolean(),
    sex: faker.name.sex(),
    birthdate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    image: faker.internet.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
  };
};
