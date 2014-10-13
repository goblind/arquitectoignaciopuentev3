var utils = require('../../config/database/utils');

exports.getProyectos = function(callback){	
	var query = "CALL getProyectos();";		
	utils.exec(query, null, callback);
};

exports.insertProyecto = function(data, callback){
	//var query = "CALL insertProyecto('"+data.nombreProyecto+"','"+data.descripcionProyectoSp+"', '"+data.descripcionProyectoEn+"','"+data.publico+"','"+data.nombreCliente+"','"+data.mailCliente+"');";		
	//utils.exec(query, null, callback);
	console.log('aa');
}

