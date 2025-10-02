# Soluciones

## Declaración de variables

1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
```js
let nombre = "Igor";
console.log(nombre);
```
2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.
```js
const pi = 3.1416;
console.log(pi);
pi = 3.15;
console.log(pi);
```
3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
```js
let edad;
console.log(edad);
edad = 20;
console.log(edad);
```

## Tipos de datos

1. Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof
```js
let name = "Geremias";
console.log(typeof name);
let numero = 10;
console.log(typeof numero);
let acertado = true;
console.log(typeof acertado);
let nulo = null;
console.log(typeof nulo);
let indefinido;
console.log(typeof indefinido);
```

2. Convierte un número a cadena usando **String()** y una cadena a número usando **Number()**.
```js
let numero = 2;
let numeroAcadena = String(numero);
console.log(numeroAcadena);
console.log(typeof numeroAcadena);

let cadena ="2";
let cadenaAnumero = Number(cadena);
console.log(cadenaAnumero);
console.log(typeof cadenaAnumero);
```

## Objetos

1. Crea un objeto persona con propiedades: nombre, edad, ciudad
```js
let persona = {nombre: "Alonso", edad: 15, ciudad: "Tuilla"};
```

2. Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).
```js
console.log(persona);
console.log(persona.nombre); 
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["ciudad"]);
```

3. Añade una nueva propiedad profesion al objeto persona
```js
persona.profesion = "Músico";
```

4. Usa desestructuración para extraer nombre y edad en variables e imprimelas
```js
let {nombre,edad} = persona;
console.log(nombre);
console.log(edad);
```

## Funciones

1. Crea una función saludar(nombre) que devuelva "Hola, <nombre>".
```js
function saludar(nombre){
    return "Hola, "+ nombre;
}
console.log(saludar("Lorena"));
```

2. Crea una función sumar(a, b) que devuelva la suma de dos números.
```js
function sumar(a, b){
    return a + b;
}
console.log(sumar(30,3));
```

3. Escribe una función flecha que multiplique dos números
```js
const multiplicacion = (a,b) => a*b;
console.log(multiplicacion(33,3));
```

4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.
```js
function esMayorDeEdad(edad){
    return edad >= 18 ? true : false;
}
```