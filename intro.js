console.log("Hola mundo node.JS");

var curso= "node.js";
var duracion= 15.5;

//OBJETOS JS

//Json
var persona = {
    nombre: "Alejandro Gerez",
    edad: 27
};

//FORMA 2 DECLARAR JS

var persona2 = new Object();
persona2.nombre ="Oscarsito";
persona2.edad= 24;

console.log ("Edad de Oscarsito " + persona2.edad);

//----------DECLARACIONES DE FUNCIONA DE JS-------------------//

//TRADICIONAL

function sumar(a,b){

    return a+b;
};

//FUNCIONES ANONIMAS

var multiplar = function (a,b){
    return a*b
};

console.log("la suma es "+ sumar(1,2));
console.log("El producto es " + multiplar(3,3));

function operacion(miFuncion,a,b){

    return miFuncion(a,b);
}

 var resultado = operacion(multiplar,3,7)

console.log("Resultado "+ resultado);


//comentario boludo
//EJERCICIO
//OPCION 1
/*function dividir(a,b){
    return a/b;
};

console.log ("El resultado es "+dividir(4,2));*/

//OPCION 2

/*var dividir = function(a,b){
    return a/b;
};
console.log("La division es "+dividir(6,2));*/

//OPCION 3

var resultado = operacion(dividir,30,2);
console.log("Resultado final " + resultado);
