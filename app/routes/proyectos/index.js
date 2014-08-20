var express = require('express');

var app = module.exports = express();

//route
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/proyectos', function(req, res){
	res.render('proyectos');
});