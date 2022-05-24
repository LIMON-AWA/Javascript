function tienepunto(){
	tmp = formusuario.cor.value;

	cor = false;
	/*
	for(i = 0; i < tmp.length; i++){
		if(tmp.charAt(i) == '.'){
			cor = true;
			break;
		}
	}*/
	if(tmp.includes('.')) cor = true;

	if(!cor){
		alert("El Correo Electrónico no es válido");
		formusuario.cor.focus();
		return false;
	}

	tmp = formusuario.pweb.value;

	pw = false;
	/*
	for(i = 0; i < tmp.length; i++){
		if(tmp.charAt(i) == '.'){
			pw = true;
			break;
		}
	}*/

	if(tmp.includes('.')) pw = true;
	
	if(!pw){
		alert("La dirección de la Página Web no es válida");
		formusuario.pweb.focus();
		return false;
	}

	return true;
}