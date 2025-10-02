let nombre = "Pedro";
console.log(nombre);

const pi = 3.1416;
console.log(pi);
//pi = 3.15; // Error: Assignment to constant variable.
//console.log(pi); // No se ejecuta

let edad;
console.log(edad);
edad = 20;
console.log(edad);

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

let numero2 = 2;
let numeroAcadena = String(numero2);
console.log(numeroAcadena);
console.log(typeof numeroAcadena);

let cadena ="2";
let cadenaAnumero = Number(cadena);
console.log(cadenaAnumero);
console.log(typeof cadenaAnumero);

let persona = {nombre: "Alonso", edad: 15, ciudad: "Tuilla"};
console.log(persona);
console.log(persona.nombre); // Dot notation
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona["nombre"]); // Bracket notation
console.log(persona["edad"]);
console.log(persona["ciudad"]);

persona.profesion = "Músico";
console.log(persona);

({ nombre, edad } = persona);
console.log(nombre);
console.log(edad);

function saludar(nombre){
    return "Hola, "+ nombre;
}
console.log(saludar("Lorena"));

function sumar(a, b){
    return a + b;
}
console.log(sumar(30,3));

const multiplicacion = (a,b) => a*b;
console.log(multiplicacion(33,3));

function esMayorDeEdad(edad){
    return edad >= 18 ? true : false;
}

console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(15));
   