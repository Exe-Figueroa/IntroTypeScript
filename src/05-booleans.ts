(() => {
  let isEnable = true;
  // isEnable = 'esto no se puede';
  isEnable = false;

  let isNumber: boolean = true;

  const random = Math.random();
  isEnable = random >= 0.5 ? true : false;
  console.log({ random, isEnable });
})();
