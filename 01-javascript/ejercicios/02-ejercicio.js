const personas = ["Andrés", "Igor", "Luis", "Carlos", "Jonhy"];
console.log(personas);

// Añadir un nombre al final
personas.push("María");
console.log(personas);

// Eliminar el primero 
personas.shift();
console.log(personas);

// Buscar si existe un nombre concreto con includes()
const existe = personas.includes("Jonhy");
console.log(existe);

const personas1 = ["Andrés", "Germán", "Luis", "Carlos", "Jonhy"];
console.log(personas1);

// Añadir un nombre al final
personas1.push("Igor");
console.log(personas1);

// Eliminar el primero 
personas1.shift();
console.log(personas1);



let nuevoArray = [4, 1, 9, 3, 7];
console.log(nuevoArray);

// Ordenar de forma ascendente
nuevoArray.sort((a, b) => a - b);
console.log(nuevoArray);

// Ordenar de forma descendente
nuevoArray.sort((a, b) => b - a);
console.log(nuevoArray);

const frutas = ["manzana", "pera", "plátano", "naranja"];
let fruta1
let fruta2;
[fruta1, fruta2] = frutas;
console.log(fruta1);
console.log(fruta2);

[fruta1,fruta2,...rest] = frutas;
console.log(rest);


let a = 100;
let b = 200;
[a,b] = [b,a];
console.log(a);
console.log(b);

let colores = ["rojo", ["verde", "azul", "amarillo"]];
 for (let i = 0; i < colores.length; i++) {
        if (colores[i] == "azul") {
            colores.filter(colores(i));
        }
    }
console.log(colores);

let colores1 = ["rojo", ["verde", "azul", "amarillo"]];
let [, [, azul]] = colores1;
console.log(azul);

let numeros = [1, 2, 3, 4, 5]; 
for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

for (let numero of numeros) {
    console.log(numero);
}

for (let indice in numeros) {
    console.log(numeros[indice]);
}

let tecnologias = ["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < tecnologias.length; i++) {
    console.log(`Posición ${i}: Valor ${tecnologias[i]}`);
}

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}

let nombres = ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(nombre => console.log(`Hola, ${nombre}`));

let numeros1 = [1,1,2,3,5,8,13,21];
numeros1.forEach(num => console.log(num * 2));

let numeros2 = [5, 12, 8, 130, 44];
let mayoresQue10 = numeros2.filter(num => num > 10);
console.log(mayoresQue10);

let nombres1 = ["Ana", "Alberto", "Bea", "Carlos"];
let nombresConA = nombres1.filter(nombre => nombre.startsWith("A"));
console.log(nombresConA);

let edades = [15, 18, 21, 12, 30];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad);

let cursos = [1, 2, 3, 4, 5];
let cursosAlCuadrado = cursos.map(curso => curso ** 2);
console.log(cursosAlCuadrado);

let precios = [10, 20, 30];
let precioConIVA = precios.map(precio => precio * 1.21);
console.log(precioConIVA);

let tecnologiasNuevo = ["HTML", "CSS", "JavaScript", "React"];
let tecnologiasMayusculas = tecnologiasNuevo.map(tech => tech.toUpperCase());
console.log(tecnologiasMayusculas);

let numeros3 = [3, 8, 12, 5, 7, 20];
let numerosPares = numeros3.filter(num => num % 2 === 0);
console.log(numerosPares);
let numerosPorDiez = numeros3.map(num => num * 10);
console.log(numerosPorDiez);

let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

let aprobados = alumnos.filter(alumno => alumno.nota >= 5);
console.log(aprobados);

let nombresAlumnosAprobados = aprobados.map(alumno => alumno.nombre);
console.log(nombresAlumnosAprobados);

nombresAlumnosAprobados.forEach(nombre => console.log(`Alumno aprobado: ${nombre}`));
