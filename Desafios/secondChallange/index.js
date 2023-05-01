import ProductManager from "./ProductManager.js";

const pm = new ProductManager("./files/products.json");

let data = {
  title: "Kia EV6",
  description: "Electric car",
  price: 45000,
  thumbnail: "Images not available",
  code: "001",
  stock: "6",
};

const car = await pm.addProduct(data);
console.log("added car", JSON.stringify(await pm.getProducts()));

await pm.updateProduct({ ...car, price: 44000 });
console.log("updated car", JSON.stringify(await pm.getProducts()));

await pm.removeProduct(car.id);
console.log("removed car", JSON.stringify(await pm.getProducts()));
