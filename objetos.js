// Declara objetos

var alumno = {
  // atributos
  nombre:  "Juanito",
  apellido:  "Perez",
  edad: 20,
  estudios: {
    carrera: "Ingeniería informática",
    ingreso: "2018"
  },
  // métodos
  getNombre: function(){
    var mensaje = "El nombre es: " + this.nombre;
    console.log(mensaje);
    window.alert(mensaje);
  }, 

  setNombre: function(pnombre){
    this.nombre = pnombre;
  },

  setInfoAlmno: function(_nombre, _apellido, _edad){
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.edad = _edad;
  },
};

var constructorAlumno = function(){
  var estudiante = {
    nombre: "Juan",
    apellido: "",
    edad: 20,
    getNombre: function(){
      var mensaje = 'El nombre es: ' + this.nombre;
      console.log(mensaje);
    },
    setNombre: function(_nombre){
      this.nombre = _nombre;
    }
  };
  return estudiante;
};

var estudiante1 = constructorAlumno();
estudiante1.getNombre();

estudiante1.setNombre('Seba');
estudiante1.getNombre();

var constructorAlumno2 = function(nombreEstudiante, apellidoEstudiante, edadEstudiante){
  var estudiante = {
    nombre: nombreEstudiante, 
    apellido: apellidoEstudiante,
    edad: edadEstudiante,
    getInfoalumno: function(){
      var mensaje = 'Nombre: ' + this.nombre + " ,Apellido: " + this.apellido;
      console.log(mensaje);
    },
    setNombre: function(_nombre){
      this.nombre = _nombre;
    }
  };
  return estudiante;
};

var estudiante2 = constructorAlumno2("Nicolas", "Barrera", 23);
estudiante2.getInfoalumno();