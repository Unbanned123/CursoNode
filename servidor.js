//IMPORTAMOS LA DEPENDECIA EXPRESS
var express = require("express");
var nunjucks = require("nunjucks");

//IMPORTAMOS LOS MODELOS
var modelos = require("./modelos/principal.js");
console.log("PRUEBA:"+ modelos.PRUEBA);

//INVOCAMOS LA FUNC EXPRESS PARA CREAR UN WS
var app = express();

//CONFIGURAMOS NUNJUCKS (Sistema de templates)

// __dirname es una variable que contiene la ruta actual donde esta este archivo(servidor,js)
nunjucks.configure(__dirname + "/vistas",{
    //le asignamos el servidor de express
    express: app
});


//LEVANTAMOS EL SERVIDOR EN EL PUERTO 8080
app.listen(8080);

//DEFINIR RUTAS PARA MI PROYECTO
app.get("/articulo" , function(req, res ){
//request= REQUEST DE LA PETICION WEB
//response= RESPONSE DE LA "  "
//EN ESTA RUTA SE EJECUTA TODO EL CODIGO localhost:8080/
//res.send("Gracias por visitar nuestra ");
    
//HACEMOS LA CONSULTA PARA BUSCAR EL PRIMER RENGLON
//buscamos el renglon cuyo id sea 1
    modelos.Articulo.findById(1).then(function(articulo){
    console.log("Se encontro articulo: " + articulo.titulo);
    res.render("articulo.html",{
//asigno el objeto articulo a la propiedad     
        articuloPrincipal:articulo
        });
        
    });
    
    
});

app.get("/informes",function(req,res){

res.send("En esta sección pueden encontrar todos los informes que requiera");
});

app.get("/blog",function(req,res){
    res.render("blog.html");
});

app.get("/usuario",function(req,res){
    res.render("usuario.html")
});



