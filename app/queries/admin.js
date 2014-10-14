//ADMIN.JS EN CARPETA APP/QUERIES. ACA ESTAN TODOS LOS QUERIES RESPECTIVOS A LA RUTA ADMIN.

//utils es la capa que conecta directamente a la db, de acá se llaman sus métodos, ej: utils.exec... etc
var utils = require('../../config/database/utils');

//métodos que se exportan para poder ser utilizados desde la capa anterior (index.js de la ruta admin)
exports.insertProyecto = function(data, callback){
	var query = "CALL insertProyecto('"+data.nombreProyecto+"','"+data.descripcionProyectoSp+"', '"+data.descripcionProyectoEn+"',"+data.publico+",'"+data.nombreCliente+"','"+data.mailCliente+"');";		
	console.log('query' + query);
	utils.exec(query, null, callback);	
}

exports.insertFoto = function(data, callback){
	var query = "CALL insertFoto('"+data.nombreProyecto+"','"+data.nombreFoto+"');";		
	utils.exec(query, null, callback);	
}

exports.setProyecto = function(data, callback){
	var query = "CALL setProyecto('"+data.nombreProyecto+"');";		
	utils.exec(query, null, callback);	
}

exports.getProyectos = function(callback){	
	var query = "CALL getProyectos();";		
	utils.exec(query, null, callback);
};

exports.getProyecto = function(data, callback){	
	var query = "CALL getProyecto('"+data.nombreProyecto+"');";	
	utils.exec(query, null, callback);
};

exports.updateProyecto = function(data, callback){	
	var query = "CALL updateProyecto('"+data.nombreProyecto+"', '"+data.nombreProyectoNuevo+"', '"+data.descripcionProyectoSp+"', '"+data.descripcionProyectoEn+"','"+data.publico+"','"+data.nombreCliente+"','"+data.mailCliente+"');";			
	utils.exec(query, null, callback);
};

exports.deleteFoto = function(data, callback){	
	var query = "CALL deleteFoto('"+data.nombreFoto+"');";	
	utils.exec(query, null, callback);
};