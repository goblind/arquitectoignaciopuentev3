$(function() {
	$('#editarProyectoBotton', '#crearProyectoBotton').on('click', function(){		
		($(this)).siblings().toggleClass();
		($(this)).addClass('active');
	});	
});

