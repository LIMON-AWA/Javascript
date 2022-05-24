$(document).ready(function(e){
	
	$(".op").on("click", function(e){
		var d = $(".display").val();
		d += $(this).val();
		$(".display").val(d);
	});

	$(".result").on("click", function(e){
		try{
			var d = $(".display").val();
			var r = eval(d);
			$(".display").val(r);
		}catch(err){
			alert("La operación no es válida\nVerifique la sintaxis por favor");
		}
	});

	$(".clear").on("click", function(e){
		$(".display").val("");
	});

	$(".bs").on("click", function(e){
		var d = $(".display").val();
		d = d.substr(0, d.length - 1);
		$(".display").val(d);
	});

	$(".sen").on("click", function(e){
		var d = $(".display").val();
		var r = Math.sin(d);
		$(".display").val(r);
	});

	$(".cos").on("click", function(e){
		var d = $(".display").val();
		var r = Math.cos(d);
		$(".display").val(r);
	});	

	$(".raiz").on("click", function(e){
		var d = $(".display").val();
		var r = Math.sqrt(d);
		$(".display").val(r);
	});

	$(".pi").on("click", function(e){
		$(".display").val(Math.PI);
	});
});