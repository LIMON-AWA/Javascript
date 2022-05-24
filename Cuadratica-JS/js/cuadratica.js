function iniciar(){
	va = document.getElementById("valora");
	vb = document.getElementById("valorb");
	vc = document.getElementById("valorc");
	r1 = document.getElementById("rst1");
	r2 = document.getElementById("rst2");
    de = document.getElementById("error");
    dnd = document.getElementById("nodef");

	va.focus();
}

function calcular(){
	a = va.value;
	b = vb.value;
	c = vc.value;

	r1.value = "";
	r2.value = "";
	de.style.display = "none";
	dnd.style.display = "none";

	if(isNaN(a) || isNaN(b) || isNaN(c) || a == "" || b == "" || c == ""){
		de.style.display = "block";
		return;
	}

	//Discriminante
	disc = b * b - 4 * a * c;

	if(disc >= 0){
		rr1 = (-b + Math.sqrt(disc)) / (2 * a);
		rr2 = (-b - Math.sqrt(disc)) / (2 * a);

		r1.value = rr1;
		r2.value = rr2;
	}else{
		dnd.style.display = "block";
	}
}


function limpiar(){
	va.value = "";
	vb.value = "";
	vc.value = "";
	r1.value = "";
	r2.value = "";
	de.style.display = "none";
	dnd.style.display = "none";
}





