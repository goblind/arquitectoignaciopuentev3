//LLAMADAS AJAX PARA REALIZAR LOS QUERIES A LA BASE DE DATOS

function insertProyecto(nombreProyecto, descripcionProyectoSp, descripcionProyectoEn, publico, nombreCliente, mailCliente){
	var data = { 
		nombreProyecto: nombreProyecto,
		descripcionProyectoSp: descripcionProyectoSp,
		descripcionProyectoEn: descripcionProyectoEn,
		publico: publico,
		nombreCliente: nombreCliente,
		mailCliente: mailCliente
	}
	$.ajax({
		url: "/insertProyecto",
		data: data
	});
}

function insertFoto(nombreProyecto, nombreFoto, nombreFotoChica){
	var data = {
		nombreProyecto: nombreProyecto,
		nombreFoto: nombreFoto,
		nombreFotoChica: nombreFotoChica
	}
	$.ajax({
		url: '/insertFoto',
		data: data		
	});
}

function setProyecto(nombreProyecto){
	var data = {
		nombreProyecto: nombreProyecto		
	}
	$.ajax({
		url: '/setProyecto',
		data: data		
	});
}

function getProyectos(){
	$.ajax({
		url: '/getProyectos',
		data: data,
		complete: function(data){			
			//data.responseJSON[0],					
		}		
	});
}

function getProyecto(nombreProyecto){
	var data = {
		nombreProyecto: nombreProyecto		
	}
	$.ajax({
		url: '/getProyecto',
		data: data,
		complete: function(data){			
			//data.responseJSON[0],					
		}		
	});
}

function updateProyecto(nombreProyecto, nombreProyectoNuevo, descripcionProyectoSp, descripcionProyectoEn, publico, nombreCliente, mailCliente){
	var data = { 
		nombreProyecto: nombreProyecto,
		nombreProyectoNuevo: nombreProyectoNuevo,
		descripcionProyectoSp: descripcionProyectoSp,
		descripcionProyectoEn: descripcionProyectoEn,
		publico: publico,
		nombreCliente: nombreCliente,
		mailCliente: mailCliente
	}
	$.ajax({
		url: '/updateProyecto',
		data: data,
		complete: function(data){			
			//data.responseJSON[0],					
		}		
	});
}

function deleteFoto(nombreFoto){
	var data = {
		nombreFoto: nombreFoto
	}
	$.ajax({
		url: '/deleteFoto',
		data: data,
		complete: function(data){			
			//data.responseJSON[0],					
		}		
	});
}