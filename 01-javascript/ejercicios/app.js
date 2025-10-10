import {nombreApp} from './constantes.js';
console.log(`Bienvenido a ${nombreApp}`);

import { version, autor } from './constantes.js';
console.log(`Versión: ${version}, Autor: ${autor}`);

import { APP_NAME } from './utils.js';
console.log(`Usando la aplicación: ${APP_NAME}`);

import { mayusculas } from './utils.js';
console.log(mayusculas("esto está en mayúsculas"));

import primerArray from './utils.js';
console.log(primerArray(["primero", "segundo", "tercero"]));
