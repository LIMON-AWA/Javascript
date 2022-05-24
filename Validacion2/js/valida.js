const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function(event){
	if(email.validity.valid){
		emailError.innerHTML = '';
		emailError.className = 'error';
	}else{
		despliegaError();
	}
});


form.addEventListener('submit', function(event){
	if(!email.validity.valid){
		despliegaError();
		event.preventDefault();  //Cancela el submit (envío del formulario)
	}
});

function despliegaError(){
	if(email.validity.valueMissing){  //input en blanco
		emailError.textContent = 'No ha ingresado una Dirección de Correo';
	}else if(email.validity.typeMismatch){  //Correo  no es válido
		emailError.textContent = 'La Dirección de Correo no es válida';
	}else if(email.validity.tooShort){  //Número de caracteres
		emailError.textContent = 'Al menos ' + email.minLength + ' caracteres. Sólo ha ingresado ' + email.value.length + ' caracteres';
	}
	emailError.className = 'error active';
}