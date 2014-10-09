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

	//privado o público
   	$('.btn-toggle').click(function() {
	    $(this).find('.btn').toggleClass('active');  
	    
	    if ($(this).find('.btn-primary').length>0) {
	    	$(this).find('.btn').toggleClass('btn-primary');
	    }
	    if ($(this).find('.btn-danger').length>0) {
	    	$(this).find('.btn').toggleClass('btn-danger');
	    }
	    if ($(this).find('.btn-success').length>0) {
	    	$(this).find('.btn').toggleClass('btn-success');
	    }
	    if ($(this).find('.btn-info').length>0) {
	    	$(this).find('.btn').toggleClass('btn-info');
	    }
	    
	    $(this).find('.btn').toggleClass('btn-default');
       
	});

});

