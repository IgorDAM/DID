# EJERCICIOS

## Arrays y métodos básicos
1. Declara un array con al menos 5 nombres de personas.
```js
const personas = ["Andrés", "Igor", "Luis", "Carlos", "Jonhy"];
```
### Creé un array con 5 string con una sintaxis de array literal.

    - Añade un nombre al final.
```js
personas.push("María");
```
### Usé un método push para añadir elemento al final del array personas 

    - Elimina el primero.
```js
personas.shift();
```
### Metodo shift que elimina el primer elemento y retorna el elemento eliminado

    - Busca si existe un nombre concreto con includes().
```js
const existe = personas.includes("Jonhy");

```
### Usé includes() para verificar existencia y devuelve un buleano indicando si existe.

2. Declara un array con al menos 5 nombres de personas.
```js
personas = ["Andrés", "Germán", "Luis", "Carlos", "Jonhy"];
```
### Array similar al anterior con algunos strings modificados

    - Añade un nombre al final.
```js
personas.push("Igor");

```
### Añade un nombre al final del array personas usando push()

    - Elimina el primero.
```js
personas.shift();

```
### Usé shift() para eliminar el primer elemento

    - Busca si existe un nombre concreto con includes().
```js
const existe = personas.includes("Maria");

```
### Usé includes() para buscar "Maria", que no está en el array, devuelve false. 

3. Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente.
```js
let nuevoArray = [4, 1, 9, 3, 7];
nuevoArray.sort((a, b) => a - b);
nuevoArray.sort((a, b) => b - a);

```
### Para orden ascendente, usé sort((a, b) => a - b)
### Para orden descendente, usé sort((a, b) => b - a)

## Desestructuración de arrays
1. Dado el array ["manzana", "pera", "plátano", "naranja"]:
```js
const frutas = ["manzana", "pera", "plátano", "naranja"];
```
### Declaré un array de frutas.

    - Extrae en variables fruta1 y fruta2 los dos primeros.
```js
let fruta1
let fruta2;
[fruta1, fruta2] = frutas;
console.log(fruta1);
console.log(fruta2);
```
### Extraje los dos primeros elementos en variables.

    - Usa el operador rest para guardar el resto en un nuevo array.
```js
let [fruta1,fruta2,...rest] = frutas;
console.log(rest);
```
### Usé el operador rest (...) para agrupar el resto de elementos.

2. Intercambia los valores de dos variables usando desestructuración
```js
let a = 100;
let b = 200;
[a,b] = [b,a];
```
### Usé desestructuración para intercambiar valores sin variable temporal.

3. Extrae el color azul del array anidado:
```js
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [, [, azul]] = colores;
console.log(azul); 
```
### Accedí al array anidado y extraje el color "azul".


## Recorrido de arrays con for

1. Crea un array con los números del 1 al 5 y muéstralos en consola con:
```js
let numeros = [1, 2, 3, 4, 5]; 
```
### Creé un array de números.

    - Un for clásico.
```js
for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
```
### recorrido del array con un for clásico

    - Un for...of.
```js
for (let numero of numeros) {
    console.log(numero);
}
```
### recorrido del array con un for...of

    - Un for...in.
```js
for (let indice in numeros) {
    console.log(numeros[indice]);
}
```
### recorrido del array con un for...in

2. Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y"
```js
let tecnologias = ["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < tecnologias.length; i++) {
    console.log(`Posición ${i}: Valor ${tecnologias[i]}`);
}
```
### Recorre el array de tecnologías y mostré posición y valor.

3. Recorre un array al revés (for con decremento).
```js
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}
```
### Recorrí el array con un for con decremento para recorrer de atrás hacia adelante y muestra posicón y valor.

## Recorridos con forEach, filter y map

1. Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre.
```js
let nombres = ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(nombre => console.log(`Hola, ${nombre}!`));

```
### Usé forEach para ejecutar una función por cada elemento.

2. Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número.
```js
let numeros1 = [1,1,2,3,5,8,13,21];
numeros1.forEach(num => console.log(num * 2));
```
### Mostré el doble de cada número con forEach.

3. Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10.
```js
let numeros2 = [5, 12, 8, 130, 44];
let mayoresQue10 = numeros2.filter(num => num > 10);
console.log(mayoresQue10);
```
### Usé filter con una condición de mayor que 10.

4. Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A.
```js
let nombres1 = ["Ana", "Alberto", "Bea", "Carlos"];
let nombresConA = nombres1.filter(nombre => nombre.startsWith("A"));
console.log(nombresConA);
```
### Usé filter y el método startsWith (comienza con) para la condición.

5. Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18).
```js
let edades = [15, 18, 21, 12, 30];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad);
```
### Filtre las edades mayores o iguales a 18.

6. Dado el array [1, 2, 3, 4, 5], usa map para obtener un nuevo array con los números elevados al cuadrado
```js
let cursos = [1, 2, 3, 4, 5];
let cursosAlCuadrado = cursos.map(curso => curso ** 2);
console.log(cursosAlCuadrado);
```
### Usé map para crear un nuevo array con los cuadrados.

7. Crea un array con precios [10, 20, 30] y usa map para calcular el precio con IVA (21%) incluido
```js
let precios = [10, 20, 30];
let precioConIVA = precios.map(precio => precio * 1.21);
console.log(precioConIVA);
```
### Apliqué un aumento del 21% a cada precio.

8. Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra.
```js
let tecnologiasNuevo = ["HTML", "CSS", "JavaScript", "React"];
let tecnologiasMayusculas = tecnologiasNuevo.map(tech => tech.toUpperCase());
console.log(tecnologiasMayusculas);

```
### Convertí cada string a mayúsculas con toUpperCase().

9. Dado el array [3, 8, 12, 5, 7, 20]:
```js
let numeros3 = [3, 8, 12, 5, 7, 20];

```
### Genero un array de números

    - Usa filter para quedarte con los pares.
```js
let numerosPares = numeros3.filter(num => num % 2 === 0);
console.log(numerosPares);
```
### filtro los pares, luego los multipliqué por 10.

    - Luego, usa map para multiplicarlos por 10
```js
let numerosPorDiez = numerosPares.map(num => num * 10);
console.log(numerosPorDiez);
```
### Multiplico por 10 los números filtrados

10. Dado el array de objetos:
```js
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];
```
- Filtra solo los alumnos con nota ≥ 5.
```js
let aprobados = alumnos.filter(alumno => alumno.nota >= 5);
console.log(aprobados);
```
### Filtro los alumnos con nota igual o superior a 5

- Usa map para obtener un array solo con sus nombres.
```js
let nombresAlumnos = alumnos.map(alumno => alumno.nombre);
console.log(nombresAlumnos);
```
### Uso .map() para obtener solo los nombres

-   Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE"
```js
nombresAlumnosAprobados.forEach(nombre => console.log(`Alumno aprobado: ${nombre}`));
```
### Uso forEach para recorrer el array y dar el mensaje con el nombre de cada alumno.