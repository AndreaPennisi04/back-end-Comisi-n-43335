class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return console.log("Fields are missing. All data is required");
    }
    const result = this.products.find((item) => item.code === code);
    if (result) {
      console.log(`A product with the code: ${code} already exists`);
      return;
    }

    const product = {
      id: this.products.length + 1,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    this.products.push(product);
  }
  getProducts() {
    console.log(this.products);
    return this.products;
  }
  getProductById(code) {
    const result = this.products.find((item) => item.code === code);
    if (!result) {
      console.log("Code not found");
    }
    console.log(result);
    return result;
  }
}

const barracas = new ProductManager();
const varela = new ProductManager();
//Unit test
barracas.addProduct("Kia EV", "Electric car", "from: " + 50000, "Image not available yet", 1, 15);
barracas.addProduct("Kia Rio", "Electric car", "from: " + 9000, "Image not available yet", 2, 5);

varela.addProduct("Kia Sorento", "Petrol", "from: " + 10000, "Image not available yet", 1, 20);
varela.addProduct("Kia Sorento", "Diesel", "from: " + 15000, "Image not available yet", 2, 10);
varela.addProduct("Kia Sorento", "Diesel", "from: " + 15000, "Image not available yet", 2, 10);
