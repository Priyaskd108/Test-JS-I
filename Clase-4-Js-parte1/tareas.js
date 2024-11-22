// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}

function devolverUltimoElemento(array) {
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  return array.length;
}

function incrementarPorUno(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  return Math.max(...numeros);
}

function cuentoElementos(arreglo){
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19) {
      contador++;
    }
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  return "Es dia Laboral";
} 

function empiezaConNueve(n) {
  return n.toString().startsWith('9');
}

function todosIguales(arreglo) {
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] !== arreglo[0]) {
      return false;
    }
  }
  return true;
} 

function mesesDelAño(array) {
  let meses = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      meses.push(array[i]);
    }
  }
  if (meses.length === 3) {
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  let mayores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}


// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
