(() => {
  let dinamicVar: any;
  dinamicVar = () => 'hola';
  dinamicVar = 'hola';
  dinamicVar = 123;
  dinamicVar = [1, 2, 3];
  dinamicVar = ['1', '2', '3'];
  let rta = (dinamicVar as string).toLowerCase();
  console.log({ rta });
  let rta2 = (<number>dinamicVar).toFixed();
  console.log({ rta2 });
})();
