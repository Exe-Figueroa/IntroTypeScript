(() => {
  type Sizes = 'L' | 'M' | 'XL' | 'XXL';
  type Product = {
    title: string,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  }

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
