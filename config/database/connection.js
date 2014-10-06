var mysql = require('mysql');

var pool = module.exports = mysql.createPool({  
    host: 'mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/',    
    user: 'adminJSbgVLs',
    password: 'gfZgnRl9ND7G',
    database: 'arquitectoignaciopuente',
    connectionLimit: 400,
    multipleStatements: true,
    supportBigNumbers: true
});
