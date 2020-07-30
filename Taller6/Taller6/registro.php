<!DOCTYPE html>
<html>
<head>
	<title>Registro</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="librerias/jquery-ui-1.12.1.custom/jquery-ui.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="librerias/jquery-3.3.1.min.js"></script>
	<script src="librerias/jquery-ui-1.12.1.custom/jquery-ui.js"></script>
	<script>
		function comprobarClave(){
    		clave1 = document.getElementById('password1').value;
    		clave2 = document.getElementById('password2').value;
    		clave1L= document.getElementById('password1').value.length;
    		var expresion = /(?=.*\d)(?=.*[a-z])/;

    		if(expresion.test(clave2)){
    		    if(clave1 == clave2){
    		        if(clave1L >= 6 && clave1L<=20){
    		            document.getElementById('textPw').innerHTML='Contraseñas Validas';
    		            document.getElementById('textPwR').innerHTML='';
    		        }else{
    		            document.getElementById('textPwR').innerHTML='Contraseñas no Validas';
    		            document.getElementById('textPw').innerHTML='';
    		        }
    		    } else{
    		        document.getElementById('textPw').innerHTML='';
    		        document.getElementById('textPwR').innerHTML='Las dos claves son distintas... Intentalo de nuevo';
    		    } 
    		} else {
    		    document.getElementById('textPw').innerHTML='';
    		    document.getElementById('textPwR').innerHTML='La contraseña debe contener caracteres especiales y/o números';
			}
		}
		function cambiaVisibilidad() {
			var div1 = document.getElementById('enfermo');
			var div2 = document.getElementById('contagioso');
			var enfermo = document.formulario1.enfermedades.value;
			var contagioso = document.formulario1.enfermedadesC.value;
			
			if(enfermo == "si"){
				div1.style.display = 'block';
			}else{
				div1.style.display = 'none';
			}
			if(contagioso == "si"){
				div2.style.display = 'block';
			}else{
				div2.style.display = 'none';
			}
		}
	</script>
</head>
<body>
	<div class="container">
		<h3>Ingresa tus datos personales</h3>
		<form action="POST" name="formulario1">
			<div class="row">
				<div class="col-sm-3">
					<label>Nombre</label>
					<br/>
        			<input type="text" name="Nombre" class="inputs" id="nombre"><br/><br/>
	
					<label>Apellidos</label>
        			<br/>
        			<input type="text" name="Apellidos" class="inputs"><br/><br/>

					<label>Escribe tu fecha de nacimiento</label>
					<input type="text" id="calendario" name="calendario" class="form-control input-sm" readonly="">

					<span class="label label-success">
						<span id="edadCalculada"></span>
					</span><br/><br/>

					<label>Usuario</label>
					<br/>
					<input type="text" name="User" class="inputs" id="user" pattern="[A-Za-z0-9]{10,20}" placeholder="Solo letras y números" title="Solo se admiten letras y números">
					<br/><br/>
					
					<label>Contraseña</label>
					<br/>
					<input type="password" name="password1" id="password1" class="inputs" pattern="(?=.*\d)(?=.*[a-z]).{6,20}" title="Debe contener numeros, letras y/o los siguientes caracteres [#,%,/,&]">
        			<br/><br/>

        			<label>Confirmar Contraseña</label>
					<br/>
					<input type="password" name="password2" id="password2" class="inputs" pattern="(?=.*\d)(?=.*[a-z]).{6,20}" title="Debe contener numeros, letras y/o los siguientes caracteres [#,%,/,&]" onchange="comprobarClave()">
					<br/>
					
					<p id="textPw" class="text-success" href="javascript:escribir()"></p><br/>
					<p id="textPwR" class="text-danger" href="javascript:escribir()"></p><br/>

					<div onclick="cambiaVisibilidad()">
						<label>¿Ha tenido enfermedades?</label><br/>
						<input type="radio" name="enfermedades" value="si"> Sí<br>
						<input type="radio" name="enfermedades" value="no"> No<br>
					</div><br/>

					<div id="enfermo" style="display:none;" onclick="cambiaVisibilidad()">
						<label>¿Han sido contagiosas?</label><br/>
						<input type="radio" id="contY" name="enfermedadesC" value="si"> Sí<br>
						<input type="radio" id="contN" name="enfermedadesC" value="no"> No<br>
					</div><br/>

					<div id="contagioso" style="display:none;">
						<label>¿Podría escribirnos cuáles??</label>
						<textarea rows="4" cols="50">Describa cuáles enfermedades ha sufrido</textarea>
					</div><br/>

					<button type="submit" class="btn btn-success" name="entrar" onclick="location.href='integrantes.html'">Enviar</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>

<script type="text/javascript">
	$(document).ready(function(){
		$("#calendario").datepicker({
			changeMonth: true,
      		changeYear: true,
      		yearRange: '1900:' + 2020,
			dateFormat: "yy-mm-dd"
		});

		$('#calendario').change(function(){
			$.ajax({
				type:"POST",
				data:"fecha=" + $('#calendario').val(),
				url:"php/calcularEdad.php",
				success:function(r){
					$('#edadCalculada').text(r + " años");
				}
			});
		});
	});
</script>