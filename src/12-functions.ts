(()=>{
  type Sizes = 'L' | 'M' | 'XL' | 'XXL';
  function createJsonProduct(
    name: string,
    createdAt: Date,
    price: number,
    description: string,
    size: Sizes
  ) {
    return {
      name,
      createdAt,
      price,
      description,
      size
    }
  }

  const product1 = createJsonProduct('P1', new Date(), 400, 'producto1', 'L');
})();

