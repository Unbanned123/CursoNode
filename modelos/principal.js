var Sequelize = require("sequelize");

//----------CONFIGURAR LA BASE DE DATOS CON SEQUELIZE

var sequelize = new Sequelize("NOMBRE_BASE","USUARIO","PASSWORD",{
    dialect: "sqlite",
    // Storage solo para sqllite
    storage: __dirname + "/database.db",
    define:
    {
            timestamps: false,
            //deshabilita la convencion por default para el nombre de las tablas
            freezeTablename:true
            }
});
//CALLBACKS FRENA LA ASINCRONIZACIÓN (Se usa .success)
sequelize.authenticate().then(function(){
	//EL CODIGO EN ESTA FUNCION SE EJECTUA
	//SOLO HASTA QUE LA OPERCION ASINCRONA (AUTHENTICATE) TERMINA
	console.log("base lista!");
});

//module.exports es un objeto que nos permite hacer visibles datos de este archivo
module.exports.PRUEBA = ("Hola");

//-------------MAPEOS DE LAS TABLAS CON SEQUELIZE

var Articulo = sequelize.define("Articulo",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
        },
    titulo:Sequelize.TEXT,
    contenido:Sequelize.TEXT,
    fecha_creacion:Sequelize.DATE
        },{
    tableName:"articulos" 
    // indicas cual es la tabla base asociada a este objeto
        });

//EXPORTA EL MODELO DE LA TABLA ARTICULO
module.exports.Articulo = Articulo;

//MAPEO DE TABLA USUARIO------------------------------------------------------------

var Usuario = sequelize.define("Usuario",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
       },
    nombre:Sequelize.TEXT,
    email:Sequelize.TEXT,
    password:Sequelize.INTEGER
},{
    tableName:"usuarios"
});

module.exports.Usuario = Usuario;
