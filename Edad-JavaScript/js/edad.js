function iniciar(){
	nombre = document.getElementById("nomusuario");
	fecha = document.getElementById("fechanac");
	datos = document.getElementById("datos");
	result = document.getElementById("result");
	nombre.focus();
}

function calcular() {
	if(nombre.value == ""){
		alert("Debe especificar un Nombre");
		nombre.focus();
		return;
	}
	
	fnac = new Date(fecha.value);  //Fecha de Nacimiento

	if(isNaN(fnac.getFullYear())){
		alert("La Fecha no es válida");
		fecha.focus();
		return;
	}

	hoy = new Date();              //Fecha actual

	if(fnac > hoy){
		alert("La Fecha no es válida");
		fecha.focus();
		return;
	}

	fnac.setDate(fnac.getDate() + 1);
	
	edad = hoy.getFullYear() - fnac.getFullYear();

	if(fnac.getMonth() >= hoy.getMonth()) edad--;

	nom = document.getElementById("nom");
	edd = document.getElementById("edad");

	nom.innerHTML = nombre.value;
	edd.innerHTML = "Su edad actual es: " + edad + " años";

	datos.style.display = "none";
	result.style.display = "block";
}

function aceptar() {
	nombre.value = "";
	fecha.value = "";
	datos.style.display = "block";
	result.style.display = "none";	
	nombre.focus();
}