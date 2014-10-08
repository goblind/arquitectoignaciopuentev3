var utils = require('../../config/database/utils');

exports.getProyectos = function(, callback){	
	var query = "CALL getProyectos();";		
	utils.exec(query, null, callback);
};