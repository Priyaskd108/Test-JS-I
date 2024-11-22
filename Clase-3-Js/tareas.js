// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  return x > y ? x : y;
}

function mayoriaDeEdad(edad) {
  return edad >= 18 ? "Allowed" : "Not allowed";
}

function conection(status) {
  if (status === 1) return "Online";
  if (status === 2) return "Away";
  return "Offline";
}

function saludo(idioma) {
  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }
}

function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  return numero < 50 && numero > 20;
}

function esEntero(numero) {
  return numero === Math.floor(numero);
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";
  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  if (num1 === 0 || num2 === 0 || num3 === 0) return "Error";
  if (num1 > num2 && num1 > num3 && num1 > 0) return "Número 1 es mayor y positivo";
  if (num3 > num1 && num3 > num2) return num3 + 1;
  return false;
}

function esVerdadero(valor) {

  return valor ? "Soy verdadero" : "Soy falso";
}

function tieneTresDigitos(numero) {
  return numero >= 100 && numero <= 999;
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function doWhile(numero) {
  let i = 0;
  do {
    numero += 5;
    i++;
  } while (i < 8);
  return numero;
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};
