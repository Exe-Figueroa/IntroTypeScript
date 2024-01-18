(() => {
  let productTitle = 'Hi i´m a product'; //Type string inferido
  productTitle = 'title changed';
  let productDescription = 'Description of product';
  console.log({
    productTitle,
    productDescription
  });
  const summary = `
  title: ${productTitle},
  description: ${productDescription}
  `;
  console.log({ summary });


})();
