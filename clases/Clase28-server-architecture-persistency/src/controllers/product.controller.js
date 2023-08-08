import ProductDto from "../dto/product.dto.js";
import { Productservice } from "../repository/index.js";

export default class ProductCtrl {
  constructor() {
    this.productService = Productservice;
  }

  getAllProducts = async (req, res) => {
    console.log("METHOD GETALLPRODUCTS", this.productService);
    try {
      const products = await this.productService.getAllProducts();
      return res.json({ message: `GETALLPRODUCTS`, products });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  createProduct = async (req, res) => {
    try {
      const productInstDto = new ProductDto(req.body);
      const newProduct = await this.productService.createProduct(ProductDto);
      return res.json({
        message: `create product success`,
        product: newProduct,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      // TODO: VALIDAR ID
      const newProduct = await this.productService.getProductById(req.params.pId);
      return res.json({
        message: `getProductById`,
        product,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  //TODO: ACTUALIZAR EL METODO DELETE EN CONTROLAR Y REPOSITORIO(SERVICIO)
  deleteProductById = async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ message: error.message });
    }
  };
}
