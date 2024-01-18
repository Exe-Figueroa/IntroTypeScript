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
