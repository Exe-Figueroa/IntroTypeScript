(()=>{
  let userId: string | number;
  userId = 123;
  userId = '123';

  function greeting(text: string | number) {
    if (typeof text === 'string') {
      text.toLowerCase(); // Si entra acá va a ser tratado como un string a partir de este punto
    }else{
      text.toString(); // Si entra acá va a ser tratado como un number a partir de este punto
    }

  };
  greeting('hola');
  greeting(123);

})()
