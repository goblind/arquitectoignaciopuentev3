var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

var inicio 		= require('./app/routes/inicio');
var proyectos		= require('./app/routes/proyectos');
var admin 		= require('./app/routes/admin');

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || '8080');
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 				// log every request to the console
app.use(bodyParser.json())				// pull information from html in POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride()); 				// simulate DELETE and PUT
app.use(inicio);					// routes
app.use(proyectos);
app.use(admin);

app.get('/', function(req, res){	
	res.redirect("/inicio");
});

app.listen(app.get('port'), ip, function(){
	console.log("Server corriendo en " + app.get('port'));
});