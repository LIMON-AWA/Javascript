function validar() {
	correo = valform.mail;
	cont = correo.value;

	if(cont.length == 0){
		alert("Debe ingresar un Correo Electrónico");
		rojo();
		correo.focus();
		return false;
	}

	if(cont.length < 8){
		alert("Debe ingresar un Correo Electrónico con mínimo 8 caracteres\nEl actual tiene " + cont.length + " caracteres");
		rojo();
		correo.focus();
		return false;
	}

	arroba = false;
	puntos = 0;

	for(i = 0; i < cont.length; i++){
		if(arroba == false){
			if(cont.charAt(i) == '@'){
				arroba = true;
			}
		}else{
			if(cont.charAt(i) == '@'){
				arroba = false;
			}
			if(cont.charAt(i) == '.'){
				puntos++;
			}
		}
	}

	if(!arroba || puntos == 0){
		alert("La Dirección de Correo  no es válida");
		rojo();
		correo.focus();
		return false;
	}

	negro();
	return true;
}

function validar2(){
	correo = valform.mail;
	cont = correo.value;

	if(!valmail(cont)){
		alert("La Dirección de Correo  no es válida");
		rojo();
		correo.focus();
		return false;	
	}

	negro();
	return true;
}

function rojo(){
	correo.style.border = "2px dotted red";
}

function negro() {
	correo.style.border = "1px solid black";
}

function valmail(email){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}