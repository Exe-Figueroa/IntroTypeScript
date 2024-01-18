(() => {
  // De forma inferida
  let productPrice = 100;
  productPrice = 12;
  console.log({ productPrice });

  // Explícito
  let age: number = 20;
  age = 12;
  // age = 12 + '1'; //'121'
  age = 12 + 8;
  console.log({ age });

  // Declarado pero no incializado
  let totalProducts: number;
  console.log({ totalProducts });// me alerta porque no tiene ningún valor
  if (totalProducts >= 10) {
    console.log('Joya, hay productos');
  }

  let discount = parseInt('12345'); // Como esto retorna un número discount es de tipo number de manea inferida ya que el motor se basa en el valor retornado y no en el trabajado en el método
  console.log({ discount });
  if (discount <= 200) {
    console.log('Apply');
  } else {
    console.log('Applyn´t');
  }

  let hex = 0x175a;
  console.log({ hex });
  let bin = 0b101001;
  console.log({ bin });

})();
