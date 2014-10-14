//MODULO DE RUTEO. LLEVA Y TRAE HACIA EL FRONTEND Y HACIA EL BACKEND

var express = require('express');
var mysqldb 	= require('../../queries/admin');

//instancio el framework express con el cual puedo ir y venir con datos desde
//el frontend
var app = module.exports = express();

//route
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/admin', function(req, res){
	res.render('admin');
});

//METODOS DE LA RUTA

//dar de alta un proyecto
app.get('/insertProyecto', function(req, res){	
	console.log('insertProyecto');
	//desde el request (req) viene toda la info desde la web
	//lleno un objeto 'data' con dicha información.
	var data = {
		nombreProyecto: req.query.nombreProyecto,
		descripcionProyectoSp: req.query.descripcionProyectoSp,
		descripcionProyectoEn: req.query.descripcionProyectoEn,
		publico: req.query.publico,
		nombreCliente: req.query.nombreCliente,
		mailCliente: req.query.mailCliente
	}	
	//mysqldb es el objeto de la capa de base de datos donde están
	//los métodos para consultar a la base de datos.
	//llamo al método correspondiente y le envío 'data' y una función
	//para obtener la respuesta de manera asincrónica.
	mysqldb.insertProyecto(data, function (err, results, fields){
		if(err) 
			throw err;
		console.log('insertProyecto OK.');
	});
});

//upload de fotos para proyectos
app.get('/insertFoto', function(req, res){	
	console.log('insertFoto');
	var data = {
		nombreProyecto: req.query.nombreProyecto,
		nombreFoto: req.query.foto,
		nombreFotoChica: req.query.fotoChica
	}	

	mysqldb.insertFoto(data, function (err, results, fields){
		if(err) 
			throw err;
		console.log('insertFoto OK.');
	});
});

//activar un proyecto
app.get('/setProyecto', function(req, res){	
	console.log('setProyecto');
	var data = {
		nombreProyecto: req.query.nombreProyecto		
	}	

	mysqldb.setProyecto(data, function (err, results, fields){
		if(err) 
			throw err;
		console.log('setProyecto OK.');
	});
});

//getProyectos para editar
//fijarse que acá, como no se envía data al servidor, el objeto 'data' 
//no está presente en el llamado al método del objeto mysqldb.
app.get('/getProyectos', function(req, res){
	console.log('getProyectos');
	mysqldb.getProyectos(function(err, results,fields){
		if(err)
			throw err;
		res.send(results[0]);
	});
});

//getProyecto (cuando del dropdown filtra 1)
app.get('/getProyecto', function(req, res){
	console.log('getProyecto');
	var data = {
		nombreProyecto: req.query.nombreProyecto		
	}
	mysqldb.getProyecto(data, function(err, results,fields){
		if(err)
			throw err;
		res.send(results[0]);
	});
});

//updateProyecto
app.get('/updateProyecto', function(req, res){
	console.log('updateProyecto');
	var data = {
		nombreProyecto: req.query.nombreProyecto,
		nombreProyectoNuevo: req.query.nombreProyectoNuevo,
		descripcionProyectoSp: req.query.descripcionProyectoSp,
		descripcionProyectoEn: req.query.descripcionProyectoEn,
		publico: req.query.publico,
		nombreCliente: req.query.nombreCliente,
		mailCliente: req.query.mailCliente
	}
	mysqldb.updateProyecto(data, function(err, results,fields){
		if(err)
			throw err;
		console.log('updateProyecto OK.');
	});
});

//deleteFoto
app.get('/deleteFoto', function(req, res){
	console.log('deleteFoto');
	var data = {
		nombreFoto: req.query.foto
	}
	mysqldb.deleteFoto(data, function(err, results,fields){
		if(err)
			throw err;
		console.log('deleteFoto OK.');
	});
});