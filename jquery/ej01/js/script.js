$(document).ready(function(){
	$("#saludo").addClass("error");

	/*
	//Función anónima
	$("#saludo").on("click", function(){
		$("#saludo").addClass("error");
	});
	*/
	
	/*
	jQuery("#saludo").on("click", cambiar)	;

	function cambiar(){
		jQuery("#saludo").addClass("error");
	}
	*/
	tam = 2;
	$("#saludo").on("click mouseenter", function(){
		$("#saludo").css({"color": "green",
			"font-size": tam+"em",
			"border-color": "gray"});		
		tam+=0.3;
	});

	$("#saludo").on("mouseleave", function(){
		$("#saludo").css({"color": "red",
			"font-size": "1.8em",
			"border-color": "red"});	
	});

	$("p").css("color", "blue");   //Todos los párrafos en azul
	$(".parrafo").css("color", "green");  //Clase parrafo en verde

	$("#publi").on("click", function(){
		//$("#publi").fadeOut(3000);  //Parámetro "slow"
		$("#publi").slideUp(3000);
	});

	$(".table").on("click", function(){
		$(".table").slideUp(3000);
	});
});