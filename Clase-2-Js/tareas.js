// En los próximos ejercicios, deberás completar las funciones con tu resolución.
// Todo tu código irá dentro de las llaves de la función.
// Recuerda que una función siempre devuelve un valor. (return)

// Nota: No modificar los nombres de las funciones y no utilizar console.log
// Caso contrario, no correrán los test!

// En estas primeras consignas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
// Tip: borrar el dato 'null' antes de poner el dato tipo string.
const nuevaString = "Hola mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 42;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// ----------------------------------

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  return num < 90;
}

function mayorQueCincuenta(num) {
  return num > 50;
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  return num % 2 === 0;
}

function esImpar(num) {
  return num % 2 !== 0;
}

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}


function redondearHaciaArriba(num) {
  return Math.ceil(num);
}
function numeroRandom() {
  return Math.random();
}

function esPositivo(numero) {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

function agregarSimboloExclamacion(str) {
  return str + "!";
}


function combinarNombres(nombre, apellido) {
  return `${nombre} ${apellido}`;
}
function obtenerSaludo(nombre) {
  return `Hola ${nombre}!`;
}

function deEuroAdolar(euro) {
  return euro * 1.20;
}


// ---------- Puntos extra ----------

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

function retornarPerimetro(lado) {
  return lado * 4;
}

function areaDelTriangulo(base, altura) {
  return (base * altura) / 2;
}

function esVocal(letra) {
  if (letra.length > 1) {
    return "Dato incorrecto";
  }
  if ("aeiou".includes(letra.toLowerCase())) {
    return "Es vocal";
  }
  return "Dato incorrecto";
}

// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
