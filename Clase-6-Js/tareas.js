// No cambies los nombres de las funciones.

function crearUsuario() {
  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }

    saludar() {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function() {
    return "Hello World!";
  };
}

function agregarStringInvertida() {
  String.prototype.reverse = function() {
    return this.split("").reverse().join("");
  };
}

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio
    };
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  return new Persona(nombre, apellido, edad, dir);
}

function agregarMetodo() {
  Persona.prototype.datos = function() {
    return `${this.nombre}, ${this.edad} años`;
  };
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
