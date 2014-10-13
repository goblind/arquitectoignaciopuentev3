function insertProyecto(nombreProyecto, descripcionProyectoSp, descripcionProyectoEn, publico, nombreCliente, mailCliente){
	var data = { 
		nombreProyecto: nombreProyecto,
		descripcionProyectoSp: descripcionProyectoSp,
		descripcionProyectoEn: descripcionProyectoEn,
		publico: publico,
		nombreCliente: nombreCliente,
		mailCliente: mailCliente
	}
	console.log(data);
	console.log(JSON.stringify(data));	
	console.log(JSON.stringify(data[0]));	
	$.ajax({
		url: "/insertProyecto",
		//contentType: "application/json",
		//data: JSON.stringify(data),
		//data: { nombreProyecto: "7", descripcionProyectoSp: "7" },
		data: data,
		// data: {
		// 	nombreProyecto: nombreProyecto,
		// 	descripcionProyectoSp:descripcionProyectoSp,
		// 	descripcionProyectoEn:descripcionProyectoEn,
		// 	publico:publico,
		// 	nombreCliente:nombreCliente,
		// 	mailCliente:mailCliente
		// },
		//processData: false,					
		complete: function(data){
			alert('ok')		;
			//data.responseJSON[0],					
		}
	});
}

