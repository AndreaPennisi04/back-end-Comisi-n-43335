export default class ProductDto {
  constructor(product) {
    const { name, description, quality, price } = product;
    this.name = name.toLowerCase();
    this.description = description;
    this.quantity = parseInt(quantity);
    this.price = this.formatPrice(price);
  }
  formatPrice(price) {
    return +price;
  }
}
