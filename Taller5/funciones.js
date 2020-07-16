function comprobarClave(){
    clave1 = document.getElementById('password1').value;
    clave2 = document.getElementById('password2').value;
    clave1L= document.getElementById('password1').value.length;
    var expresion = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

    if(expresion.test(clave2)){
        if(clave1 == clave2){
            if(clave1L >= 15 && clave1L<=20){
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
        document.getElementById('textPwR').innerHTML='La contraseña debe contener caracteres especiales y/o mayusculas';
    }
}

