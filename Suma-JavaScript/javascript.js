function init(){
	txtval1 = document.getElementById("val1");
	txtval2 = document.getElementById("val2");
	txtrst = document.getElementById("result");
	txtval1.focus();
}

function sumar(){	
	val1 = txtval1.value;
	val2 = txtval2.value;

	if(val1 == "" || isNaN(val1)){
		alert("Valor 1 no es válido");
		txtval1.focus();
		return;
	}

	if(val2 == "" || isNaN(val2)){
		alert("Valor 2 no es válido");
		txtval2.focus();
		return;
	}

	rst = Number(val1) + Number(val2);

	txtrst.value = rst;
}

function limpiar(){
	txtval1.value = "";
	txtval2.value = "";
	txtrst.value = "";
	txtval1.focus();
}









