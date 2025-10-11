# EJERCICIOS DE MODULOS EN JAVASCRIPT

## 1.Exportar e importar constantes
1. Crea un archivo constantes.js que contenga varias constantes como el nombre de la app, la versión y el autor.
```js
export const nombreApp = "Mi Aplicación";
export const version = "1.0.0";
export const autor = "Igor Sánchez";
```
### Creé un módulo para exportar constantes usando export.
### En el HTML se debe incluir el <script type="module" >

2. Importa esas constantes en app.js y muéstralas en consola.
```js
import {nombreApp} from './constantes.js';
console.log(`Bienvenido a ${nombreApp}`);

import { version, autor } from './constantes.js';
console.log(`Versión: ${version}, Autor: ${autor}`);
```
### Importé las constantes y las usé en console.log.

## 2.Funciones matemáticas
1. En operaciones.js crea y exporta funciones para sumar, restar, multiplicar y dividir.
```js
export function sumar(a, b) {
    return a + b}

export function restar(a, b) {
    return a - b}

export function multiplicar(a, b) {
    return a * b}

export function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
```
### Exporté funciones nombradas para operaciones básicas.

2. En main.js importa esas funciones y prueba varias operaciones.
```js
import { sumar } from "./operaciones.js";
import { restar } from "./operaciones.js";
import { multiplicar } from "./operaciones.js";
import { dividir } from "./operaciones.js";

console.log("Suma: 5+3=" + sumar(5, 3)); // 8
console.log("Resta: 5-3=" + restar(5, 3)); // 2
console.log("Multiplicación: 5x3=" + multiplicar(5, 3)); // 15
console.log("División: 5/2=" + dividir(5, 2)); // 2.5
```
### Importé cada función y probé con ejemplos.

## 3.Exportación por defecto
1. Crea un archivo saludos.js que tenga una exportación por defecto con una función saludar(nombre).
```js
export default function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
```
### Usé export default para la función.

2. Importa esa función en index.js y úsala con tu nombre.
```js
import saludar from "./saludos.js";
console.log(saludar("Germán"));
```
### Importé la función sin llaves.

## 4. Combinar exportaciones
1. En utils.js exporta:
Una constante llamada APP_NAME.
Una función mayusculas(texto) que convierta un string a mayúsculas.
Haz una exportación por defecto con una función que reciba un array de strings y devuelva el primero.
```js
export const APP_NAME="Mi App";

export function mayusculas(texto) {
    return texto.toUpperCase();
}

export default function primerArray(String){
    return String[0];
}
```
### Exporté una constante, una función nombrada y una función por defecto.

2. En app.js importa todo y pruébalo.
```js
import { APP_NAME } from './utils.js';
console.log(`Usando la aplicación: ${APP_NAME}`);

import { mayusculas } from './utils.js';
console.log(mayusculas("esto está en mayúsculas"));

import primerArray from './utils.js';
console.log(primerArray(["primero", "segundo", "tercero"]));
```
### Importé la constante y función nombrada con llaves, y la por defecto sin llaves.

## 5. Importar con alias
1. En matematicas.js exporta dos funciones: areaCirculo(radio) y areaCuadrado(lado).
```js
export function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

export function areaCuadrado(lado) {
    return lado * lado;
}
```
### Exporté funciones para área del círculo y cuadrado.

2. En main.js importa esas funciones con alias (circulo, cuadrado) y calcula las áreas de un círculo de radio 5 y un cuadrado de lado 4.
```js
import { areaCirculo as circulo} from "./matematicas.js";
import { areaCuadrado as cuadrado} from "./matematicas.js";

console.log("Área círculo (r=10): " + circulo(10)); // 314.1592653589793
console.log("Área cuadrado (lado=7): " + cuadrado(7)); // 49
```
### Importé las funciones con alias 

## 6. Importar todo con * as
1. En personas.js exporta varias constantes con nombres de personas.
```js
export const Ana = "Ana";
export const Luis = "Luis";
export const Marta = "Marta";
export const Pedro = "Pedro";
export const Juan = "Juan";
```
### Exporté múltiples constantes.

2. En main.js impórtalas todas bajo un objeto:
```js
import * as personas from "./personas.js";
```
### Importé todo bajo el objeto personas con * as.