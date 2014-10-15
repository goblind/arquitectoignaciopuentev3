//UTILS.JS

//instancio un pool de conexión a mysql
var pool = require('./connection');

//export de los métodos (Son 3: 1ro obtener la conexión, 2do cerrar la conexión, 3ro executar sobre la conexión)
module.exports = {
  	getDBConnection: function(callback) {
		pool.getConnection(function(err, connection){
	        		if(err){
	           			 console.log(err);
	           			 return callback(err);
	        		}
	        	callback(null, connection);
	    	});
	},
  	endDBConnection: function(connection) {
    		connection.release();
	},
   	exec: function(query, data, callback) {
	   	var _this = this;
	   		//console.log('utils.js' + query);
	    	this.getDBConnection(function(err, connection){
	       		 if(err){
	            			console.log(err);
	            			return callback(err);
	        		}
	        		connection.query(query, data, function(err, results) {
	            		_this.endDBConnection(connection);
	            		if(err) {
	                		return callback(err);
	            		}
	            		callback(null, results);
	        		});
	    	});
	}
}




