(() => {
  type UserId = string | number;
  let userId: UserId;

  function greeting(text: UserId) {
    if (typeof text === 'string') {
      text.toLowerCase(); // Si entra acá va a ser tratado como un string a partir de este punto
    } else {
      text.toString(); // Si entra acá va a ser tratado como un number a partir de este punto
    }
  };

  // Literal types
  type Sizes ='M' | 'L' | 'XL' | 'XXL' | 'XXXL';
  let shirtSize: Sizes
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XXL';
  shirtSize = 'XXXL';
  // shirtSize = 'Las que le guntan al leo'; // Esto lo resalta ya que las que le gustan al leo no están incluidas en los talles
})();
