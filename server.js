var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

var inicio 			= require('./app/routes/inicio');
var contacto 		= require('./app/routes/contacto');
var publicaciones 	= require('./app/routes/publicaciones');
var proyectos		= require('./app/routes/proyectos');
var noticias		= require('./app/routes/noticias');
var premios			= require('./app/routes/premios');
var estudio 		= require('./app/routes/estudio');

//app.set('port', process.env.PORT || 1437);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || '8080');
app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 							// log every request to the console
app.use(bodyParser.json())							// pull information from html in POST
app.use(bodyParser.urlencoded({	
  extended: true
}));
app.use(methodOverride()); 							// simulate DELETE and PUT

app.use(inicio);									// routes
app.use(contacto);
app.use(publicaciones);
app.use(proyectos);
app.use(noticias);
app.use(premios);
app.use(estudio);
app.get('/', function(req, res){	
	res.redirect("/inicio");
});

app.listen(app.get('port'), function(){
	console.log("Server corriendo en " + app.get('port'));
});