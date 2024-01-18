(() => {
  // No se puede
  // let number: number = undefined;
  // let string: string = null;
  // Crean tipo any a no ser que le definas que son tipo null o undefined
  let myNull = null;
  let myUndefined = undefined;
  // Se le pueden agregar que sean tipo null o undefined además del valor correspondiente para que nos permita inicializarlo en null o undefined y después podemos cambiar el value
  let myNumber: null | number = null;
  let myString: undefined | string = undefined;
  myNumber = 123;
  myString = '2131';

  function hi(name: null | string) {
    let text = 'Hola ';
    // name ? text += name : text += 'nobody';
    name += name ? name : 'nobody';

    console.log({ text });
  }
  hi(null);
  hi('Cufa');

})();
