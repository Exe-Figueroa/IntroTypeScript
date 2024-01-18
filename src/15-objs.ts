import { addProduct, products } from "./products/product.service";

(() => {
  addProduct({
    title: 'P1',
    stock: 200,
    size: 'XL'
  });
  addProduct({
    title: 'P2',
    stock: 2001,
  });
  console.log({ products });

})();
