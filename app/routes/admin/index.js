var express = require('express');
var mysqldb 	= require('../../queries/admin');

var app = module.exports = express();

//route
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/admin', function(req, res){
	res.render('admin');
});

app.get('/insertProyecto', function(req, res){	
	console.log('insertProyecto');
	var data = {
		nombreProyecto: req.query.nombreProyecto,
		descripcionProyectoSp: req.query.descripcionProyectoSp,
		descripcionProyectoEn: req.query.descripcionProyectoEn,
		publico: req.query.publico,
		nombreCliente: req.query.nombreCliente,
		mailCliente: req.query.mailCliente
	}	

	mysqldb.insertProyecto(data, function (err, results, fields){
		if(err) 
			throw err;
		console.log('insertProyecto OK.');
	});
});
