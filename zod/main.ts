import { Product, Products, ProductsSchema } from './schema/product';
import axios from 'axios';

(async function () {
  try {
    const products = await axios.get('http://localhost:3000/products').then((response) => ProductsSchema.parse(response.data));
    console.log(products);
  } catch (e) {
    console.error(e);
  }
})();
