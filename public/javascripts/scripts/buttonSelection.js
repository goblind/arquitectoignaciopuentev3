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
});

