(() => {
  const calcTotal = (prices: number[]): number => {
    const totalPrice: number = prices.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    return totalPrice;
  }
  const total1 = calcTotal([12, 3, 13, 134, 25, 4, 64, 6, 3646, 3, 3, 3, 3, 52]);
  console.log({ total1 });

})();
