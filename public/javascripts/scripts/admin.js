$(function() {	
	$('#editarProyecto').hide();
	$('#crearProyecto').hide();	

	$("[name='publico']").bootstrapSwitch('onText', 'SI');
	$("[name='publico']").bootstrapSwitch('offText', 'NO');

	//click a botón inicial editar proyecto
	$('#editarProyectoBoton').on('click', function(){
		if($('#crearProyectoFotografias').is(':visible')) {
			alert('Debe finalizar el proceso de agregado de fotografías.');
		}
		else {
			$('#crearProyecto').hide();			
			$('#editarProyecto').show();

		}
	});

	//click a botón inicial crear proyecto
	$('#crearProyectoBoton').on('click', function(){
		if($('#crearProyectoFotografias').is(':visible')) {
			$('#editarProyecto').hide();
			$('#crearProyecto').show();	
		}
		else {
			$('#editarProyecto').hide();
			$('#crearProyectoFotografias').hide();
			$('#crearProyectoFotografiasFin').hide();
			$('#crearProyecto').show();	
		}		
	});	

	$("#editarProyectoLista li a").click(function(){
      		$("#editarProyectoTitulo").text($(this).text());
      		
   	});

	//click a cargar proyecto
	$('#crearProyectoSubmit').on('click', function(){
		if(notEmpty('crearProyectoNombre') && notEmpty('crearProyectoDescripcionSp') && notEmpty('crearProyectoDescripcionEn') 
			&& notEmpty('crearProyectoNombrePersona') && notEmpty('crearProyectoEmail')) {
			//llamada ajax
			insertProyecto(getVal('crearProyectoNombre'), getVal('crearProyectoDescripcionSp'), getVal('crearProyectoDescripcionEn'),
				$('input[name="publico"]').bootstrapSwitch('state'), getVal('crearProyectoNombrePersona'), getVal('crearProyectoEmail'));
			//disable al form para pasar a la carga de fotografías
			disable('crearProyectoNombre');
			disable('crearProyectoDescripcionSp');
			disable('crearProyectoDescripcionEn');
			disable('crearProyectoNombrePersona');
			disable('crearProyectoEmail');
			disable('crearProyectoSubmit');
			$('input[name="publico"]').bootstrapSwitch('readonly', true, true);	
			$('#crearProyectoFotografias').show();
			$('#crearProyectoFotografiasFin').show();
		}
		else{
			alert('Debe llenar todos los campos.')
		}		
	});

	//click a cargar un set de fotos
	$('#crearProyectoFotografiasAgregar').on('click', function(){
		//validación
		insertFoto(getVal('crearProyectoNombre'),)
	});

	//click a finalización total de carga de fotos
	$('#crearProyectoFotografiasFin').on('click', function(){		
		$('#crearProyectoNombre').val('');
		$('#crearProyectoDescripcionSp').val('');
		$('#crearProyectoDescripcionEn').val('');
		$('#crearProyectoNombrePersona').val('');
		$('#crearProyectoEmail').val('');
		$('input[name="publico"]').bootstrapSwitch('readonly', false);
		enable('crearProyectoNombre');
		enable('crearProyectoDescripcionSp');
		enable('crearProyectoDescripcionEn');
		enable('crearProyectoNombrePersona');
		enable('crearProyectoEmail');
		enable('crearProyectoSubmit');
		$('#crearProyectoFotografias').hide();
		$('#crearProyectoFotografiasFin').hide();
	});
});

function getVal(id){
	return $('#' + id).val();
}

function notEmpty(id){
	var value = $("#"+id).val();
	var len = value.length;
	if (len < 1)
    		return false;
	else
    		return true;
}

function disable(id){
	$("#"+id).attr('disabled', true);
}

function enable(id){
	$("#"+id).attr('disabled', false);
}



