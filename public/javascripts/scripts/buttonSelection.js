$(function() {	
	$('#editarProyecto').hide();
	$('#crearProyecto').hide();

	$('#editarProyectoBoton').on('click', function(){
		$('#crearProyecto').hide();			
		$('#editarProyecto').show();
	});

	$('#crearProyectoBoton').on('click', function(){
		$('#editarProyecto').hide();		
		$('#crearProyecto').show();
	});	

	$("#editarProyectoLista li a").click(function(){
      		$("#editarProyectoTitulo").text($(this).text());
      		
   	});

	//$.fn.bootstrapSwitch.defaults.size = 'large'; labelText
	
	$("[name='publico']").bootstrapSwitch('labelText', 'Público');
	$("[name='publico']").bootstrapSwitch('onText', 'SI');
	$("[name='publico']").bootstrapSwitch('offText', 'NO');

});

