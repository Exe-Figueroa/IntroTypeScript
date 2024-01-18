/** 01-Por qué usar typescript?
 * *Es muy usado por la comunidad y muy recomendado además
 * *Su tipado ayuda a prevenir errores
 * *Muchas tecnologías están escritas en TS
 * *Puede prevenir hasta un 15% de bugs
 */
/** 02-TypeScript vs. JavaScript
 * *En JS te das cuenta de que tienes un recién cuando ejecutas el códico
 * *TS es js pero con tipos. Eso incluye todas las nuevas versiones de js y el js actual y además tiene un análisis estático del código
 */

/** 03-Configurado nuestro proyecto
 * *Instalamos ts
 * *Creamos .gitignore
 * *Crear el editorconfig
 */

/** 04-Atrapando bugs
 * *Creamos un archivo .js para comparar
 * *Luego activamos el ts-check para ver los errores
 * *Al habilitar el detector de código de ts podemos apreciar muchos errores sutíles que con js no nos daríamos cuenta hasta el momento de ejecución del código
 */

/** 05-El compilador de TypeScript
 * *TS transpla, es decir que transforma su código a js para que el browser lo pueda leer
 * *Al ejecutar el comando npx tsc src/01-hello.ts ts transforma el código ts a js y crea un archivo igual con el mismo nombre pero transformado
 * *Al comando se le puede pasar un --target con la versión de ES que deseemos por ejemplo ES6
 * *Se le puede agregar otro flag => --outDir dist/ <== para que nos mande los archivos a la carpeta especificada
 * *Se le pueden en viar expresiones regulares para que haga lo mismo con diferentes archivos con la misma extensión
 */

/** 06-Veamos el TSConfig.json
 * *Es un archivo creado con el fin de ahorrarnos trabajo a la hora de transpilar de ts a js
 * *npx tsc --init => Crea el TSConfig
 * *Se puede configurar el outDir
 * *Al configurar el archivo podemos ejecutar el comando sin tantos flags
 * *Al colocar el flag --watch observa constantemente los archivo y transpila en tiempo real
 */

/** 07-Qué es el tipado en TypeScript
 * *La sintaxis es la siguiente=> const nameVar: type = value; (declaracion, tipo y valor)
 */

/** 08-Tipos inferidos
 * *Al momento de declarar e inicializar variables typescript infiere y te dice de qué tipo es esa variable en base al valor asignado
 * *Al usar ts el código tiene mejor integración con vsc y al colocar un punto en algún elemento te devuelve automáticamente los métodos del mismo
 * *Al colocar las mismas variables en distintos archivos, si estas están en el scope global, van a chocar
 */

/** 09-Numers
 * *En caso de querer declarar una variable y no inicializarla en ese momento hay que colocarle el tipo ya que no es inferido el tipo en esa variable
 * *Es mala práctica utilizar Number en vez de number
 */

/** 10-Booleans
 * *TS verifica que los valores de retorno sean del mismo tipo que el que debería ir en la fn
 */
/** 11-Strings
 * *Lo mismo que lo anterior básicamente
 */
/** 12-Arrays
 * *En los arrays se definen así los tipos
 * *number[] => para un array de numeros
 * *string[] => para un array de strings
 * *{name: string, price: number}[] => para un array de objetos con distintas propiedades de distintos tipos
 * *(strin | |number)[] => para arrays que aceptan strings o números
 * *Al utilizar los métodos de los arrays el motor de inferencia hace que no alteres el tipo de valores que están dentro del array
 */

/** 13-Any
 * *Any es un tipo que tiene ts que te permite hacer que una variable acepte cualquier tipo
 * *Se recomienda que no sea utilizado
 * *Sirve para cuando se están migrando proyectos y los desarrolladores de este no están acostumbrados a ts
 * *Se puede hacer algo para que a pesar de ser any que funcione como un string o cualquier otro tipo
 * *Eso sirve para cuando las librerías no tipan los datos que proveen. Vos podés decirle a ts que trate a ese valor como un string, number o el tipo que desees
 */

/** 14-Union Types
 * *La idea es aumentar la flexibilidad respecto a los tipos. Por ejemplo en un array yo quiero que vengan distintos tipos de valores como strings, numbers o booleans
 * *Al realizar un condicional en ts lo que hace es que dependiendo del tipo de dato que tenga la variable es cómo va a ser tratado a partir de ese punto dicho valor
 */

/** 15-Alias y tipos literales
 * *Creamos un type con un nombre acorde a la variable que vamos a tipar y lo igualamos con los tipos que le correspondan al mismo.
 * *Ej=> type Data = string[] | number[];
 * *Literal types => después de los dos puntos que definen los tipos se le pueden colocar los posibles valores, y en caso de que a la variable se le asigne un valor distinto a los indicados te va a saltar un error
 */

/** 16-Null y undefined
 * *Se pueden utilizar nameVar?.method() || 'Other option' para que en caso de que el método no exista en dicha variable se la trate como algo distinto y poder retornar el otro valor que es un valor por defecto
 */

/** 17-Funciones
 * *Date es el único que no es mala práctica
 * *Luego de definir los tipos en los parámetros nos devuelve errores si al momento de ejecutar la fn nos faltan argumentos y si estos argumentos son de tipo incorrecto también nos devuelve error
 * *También tipa el retorno de manera automática y te muestra los métodos y propiedades del objeto en caso de colocarle un . a la variable que lo contiene
 * *También se puede trabajar con arrow functions
 * *Se pueden colocar que algún parámetro no sea necesariamente incluido al momento de llamar la fn
 *  ? Esto se hace colocando un signo de pregunta entre el nombre asignado al parámetro y los dos puntos para colocar el tipo
 */
