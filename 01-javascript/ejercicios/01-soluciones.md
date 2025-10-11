# Soluciones

## Declaración de variables

1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
```js
let nombre = "Igor";
console.log(nombre);
```
### Utilicé let para declarar una variable que puede ser reasignada, asigné mi nombre como valor string y usé console.log() para mostrar el valor

2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.
```js
const pi = 3.1416;
console.log(pi);
pi = 3.15;
console.log(pi);
```
### Usé const para declarar una constante, verifiqué que no se puede reasignar (error al intentarlo) y confirmé el comportamiento de las constantes en JavaScript

3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
```js
let edad;
console.log(edad);
edad = 20;
console.log(edad);
```
### Declaré variable sin asignar valor (valor undefined), asigné valor posteriormente y mostré ambos estados en consola

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
### Creé variables representando todos los tipos primitivos, usé typeof para verificar el tipo de cada una e incluí null que muestra comportamiento especial con typeof

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
### Usé String() para conversión explícita a string, usé Number() para conversión explícita a número y verifiqué los tipos resultantes

## Objetos

1. Crea un objeto persona con propiedades: nombre, edad, ciudad
```js
let persona = {nombre: "Alonso", edad: 15, ciudad: "Tuilla"};
```
### Creé objeto literal con propiedades y usé sintaxis clave-valor

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
### Accedí a propiedades usando notación de punto, accedí a propiedades usando notación de corchetes y mostré ambos métodos funcionan

3. Añade una nueva propiedad profesion al objeto persona
```js
persona.profesion = "Músico";
```
### Añadí propiedad nueva dinámicamente y usé notación de punto para la asignación

4. Usa desestructuración para extraer nombre y edad en variables e imprimelas
```js
let {nombre,edad} = persona;
console.log(nombre);
console.log(edad);
```
### Extraje propiedades específicas del objeto, usé sintaxis de desestructuración y las variables creadeas contienen los valores extraidos

## Funciones

1. Crea una función saludar(nombre) que devuelva "Hola, <nombre>".
```js
function saludar(nombre){
    return "Hola, "+ nombre;
}
console.log(saludar("Lorena"));
```
### Creé una función declarativa con parámetro, usé concatenación de Strings y retorné el saludo personalizado

2. Crea una función sumar(a, b) que devuelva la suma de dos números.
```js
function sumar(a, b){
    return a + b;
}
console.log(sumar(30,3));
```
### Implementé función con dos parámetros, retorna el resultado de la operación y probé con valores específicos

3. Escribe una función flecha que multiplique dos números
```js
const multiplicacion = (a,b) => a*b;
console.log(multiplicacion(33,3));
```
### Usé sintaxis de función flecha, implementé retorno implícito y la función es anónima asignada a constante

4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.
```js
function esMayorDeEdad(edad){
    return edad >= 18 ? true : false;
}
```
### Implementé la función con retorno condicional, usé el operador ternario para compactar el código y la función devuelve un buleano.