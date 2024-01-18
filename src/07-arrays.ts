(() => {
  const prices = [1, 2, 4, 5];
  const listaRara: (string | number)[] = [1, '2', 4, '5'];
  prices.push(1);
  prices.push(12);
  // prices.push('123');// este falla por el tipo de datos
  console.log({ prices, listaRara });

})();
