import { sumar } from "./operaciones.js";
import { restar } from "./operaciones.js";
import { multiplicar } from "./operaciones.js";
import { dividir } from "./operaciones.js";

import { areaCirculo } from "./matematicas.js";
import { areaCuadrado } from "./matematicas.js";

import * as personas from "./personas.js";


console.log("Suma: 5+3=" + sumar(5, 3)); // 8
console.log("Resta: 5-3=" + restar(5, 3)); // 2
console.log("Multiplicación: 5x3=" + multiplicar(5, 3)); // 15
console.log("División: 5/2=" + dividir(5, 2)); // 2.5

console.log("Área círculo (r=10): " + areaCirculo(10)); // 314.1592653589793
console.log("Área cuadrado (lado=7): " + areaCuadrado(7)); // 49


