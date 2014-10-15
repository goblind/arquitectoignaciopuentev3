//DATA PARA LA CONEXIÓN FÍSICA A LA BD

//Instancio la librería
var mysql = require('mysql');

//pool de conexión
var pool = module.exports = mysql.createPool({  
    // //host: 'mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/',    
    // host: 'mysql://127.10.225.2:3306/',
    // //host: 'mysql://adminJSbgVLs:gfZgnRl9ND7G@127.10.225.2:3306/',
    // user: 'adminJSbgVLs',
    // password: 'gfZgnRl9ND7G',
    // database: 'arquitectoignaciopuente',

	host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
  	user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
  	password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
  	port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
  	database : 'arquitectoignaciopuente',    
    connectionLimit: 400,
    multipleStatements: true,
    supportBigNumbers: true
});


/*
usuario admin:
    usuario: ignacio
    password: ArQUitectO
*/