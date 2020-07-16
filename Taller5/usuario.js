function validateName(){
	
	var sizename =document.getElementById("nombre").value.length;
	
	if(sizename > 0 && sizename < 25){
		document.getElementById("nombre").className = "inputs input_correct";
		document.getElementById("aviso1").innerHTML = "";
	}
	else{
		document.getElementById("nombre").className = "inputs input_incorrect";
		document.getElementById("aviso1").innerHTML = "Este campo debe contener entre 1 y 25 caracteres";
		document.getElementById("aviso1").className = "incorret";
	}
}

function validateLastName(){
	
	var sizelastname =document.getElementById("apellidos").value.length;
	
	if(sizelastname > 0 && sizelastname < 25){
		document.getElementById("apellidos").className = "inputs input_correct";
		document.getElementById("aviso2").innerHTML = "";
	}
	else{
		document.getElementById("apellidos").className = "inputs input_incorrect";
		document.getElementById("aviso2").innerHTML = "Este campo debe contener entre 1 y 25 caracteres";
		document.getElementById("aviso2").className = "incorret";
	}
}

function validateEmail(){
	var email = document.getElementById("email").value;
	//  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
	var expreg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if(expreg.test(document.getElementById("email").value)){
		document.getElementById("email").className = "inputs input_correct";
		document.getElementById("avisoemail").innerHTML = "";
	}
	else{
		document.getElementById("email").className = "inputs input_incorrect";
		document.getElementById("avisoemail").innerHTML = "Email incorrecto";
		document.getElementById("avisoemail").className = "incorret";
	}
}