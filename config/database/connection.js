//DATA PARA LA CONEXIÓN FÍSICA A LA BD

//Instancio la librería
var mysql = require('mysql');

//pool de conexión
var pool = module.exports = mysql.createPool({  
    host: 'mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/',    
    user: 'adminJSbgVLs',
    password: 'gfZgnRl9ND7G',
    database: 'arquitectoignaciopuente',
    connectionLimit: 400,
    multipleStatements: true,
    supportBigNumbers: true
});

/*
usuario admin:
    usuario: ignacio
    password: ArQUitectO
*/