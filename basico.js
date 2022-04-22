// comentarios
/*
  Comentarios multilinea
*/

var x,y,x;
x = 1; y = 2;
z = x + y;

var nombreAlumno = "Juanito";
var _nombre = "Lucho";

var a = 1;

function funcion1(){
  var a = 2;  
}

// Definición de constantes
const PI = 3.1416;

// Asignación de valores
// suma
var x = 1;
x += 1;

x -= 1;

x *= 1;

x /= 1;

x %= 1;

// Data types
var a = 23;
var b = 'Strings';
var m = {nombre:'Juanito', apellido:'Perez'};

var n = null;

var valor = 20 + 12 + 'String';

var arreglos = ['alumno1', 'alumno2', 'alumno3'];

// acceso
var varlo1 = arreglos[1];

// typeof
typeof 'Valor'; //string
typeof 2;  // number

var variable;
 
typeof variable; // undefined

// strings
 var texto = "ABCD";
 var largo = texto.length;

 var letra = texto.indexOf('C');

 // Condicionales
 /*
 == igualdad
 != distinto
 ! negacion
 && and
|| or
*/

var numero = 10;
if (numero <= 10){
  alert('numero es menor a 10');
} else if (numero > 20){
  alert('numero es mayor a 20');
} else {
  alert ('numero se encuentra en el rango 10 - 20');
}

if (numero >= 10 && numero <= 20){
  console.log('el valor se encuentra en el rango 1');
}

var booleano = false;
if(!booleano){
  console.log('Booleano es = falso');
} else {
  console.log('Booleano es = verdadero');
}

var dia= 2;
switch(dia) {
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
}

// Bucles
var numero = 0;
for (var i = 0; i < 5; i++){
  numero += 2;
  if (numero == 4){
    numero += 5;
  }
}

var a = 0;
var arreglo = [10, 20, 30, 40, 50];
for (var j = 0; j.arreglo.length; j++){
  a += arreglo[j];
}

var contador = 0;
while(contador < 10){
  contador++;
}

var count = 0;
do{
  console.log('imprimir');
  count ++;
}while (count < 10);

