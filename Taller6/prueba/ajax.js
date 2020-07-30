document.querySelector('#actualizar').addEventListener('click', traerDatos);
//document.querySelector('#filtrar').addEventListener('click', filtrarDatos);

function traerDatos(){
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200){
            let datos = JSON.parse(this.responseText);
            let resp  = document.querySelector('#datos');
            resp.innerHTML = '';

            for(item of datos){
                resp.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                        <td>${item.company.name}</td>
                        <td>${item.address.city}</td>
                        <td>${item.address.street}</td>
                        <td>${item.address.zipcode}</td>
                    </tr>
                `
            }
        }
    }
}

var texto=[];
function cuadro(etiq){
    texto.push(etiq.textContent);
    etiq.innerHTML = '<input id="'+etiq.textContent+'" type="text" style="width:100px" onblur="restauText(this)" oninput="buscar(this)">';
}
var ID = "";
function restauText(inp) {
    for(etiq of texto){
        if(etiq == inp.id && inp.value.length == 0){
            inp.parentNode.innerHTML = etiq;
        }
    }
}

var buscando = false;
var inputs = new Set();
var lista = [];
var tamanterior = 0;
var cont = 0;

function buscar(ctext){

    for(c of inputs){
        if(c == ctext){tamanterior = c.value.length;}
    }
    
    inputs.add(ctext);
    var listadebusqueda = [];

    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200){
            let datos = JSON.parse(this.responseText);
            let resp  = document.querySelector('#datos');
            resp.innerHTML = '';

            if(!buscando || tamanterior < ctext.value.length){
                listadebusqueda = datos;
                buscando=true;
            }else{
                listadebusqueda = lista;
            }

            for(item of listadebusqueda){

                switch (ctext.id){
                    case "Nombre":
                        imprimir(item,item.name,ctext.value,resp);
                    break;
                    case "Usuario":
                        imprimir(item,item.username,ctext.value);
                    break;
                    case "Email":
                        imprimir(item,item.email,ctext.value);
                    break;
                    case "Telefono":
                        imprimir(item,item.phone,ctext.value);
                    break;
                    case "Sitio Web":
                        imprimir(item,item.website,ctext.value);
                    break;
                    case "Empresa":
                        imprimir(item,item.company.name,ctext.value);
                    break;
                     case "Ciudad":
                        imprimir(item,item.address.city,ctext.value);
                    break;
                     case "Calle":
                        imprimir(item,item.address.street,ctext.value);
                    break;
                     case "Codigo Postal":
                        imprimir(item,item.address.zipcode,ctext.value);
                    break;
                    default:
                        alert("error");
                    break;
                }
            }
        }
    };
    if(ctext.value.length == 0){
        inputs.delete(ctext);
    }
    if(inputs.length == 0){
        buscando = false;
    }
}

function imprimir(item,arch,inpu,resp){

    if(arch.includes(inpu,0)){

        lista.push(item);
        resp.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                        <td>${item.company.name}</td>
                        <td>${item.address.city}</td>
                        <td>${item.address.street}</td>
                        <td>${item.address.zipcode}</td>
                    </tr>
                    `
    }
}


/*if (item.address.zipcode == '92998-3874' || item.address.zipcode == '90566-7771'){
                    resp.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                        <td>${item.company.name}</td>
                        <td>${item.address.city}</td>
                        <td>${item.address.street}</td>
                        <td>${item.address.zipcode}</td>
                    </tr>
                    `
                }

function filtrarDatos(){
    xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200){
            let datos = JSON.parse(this.responseText);
            let resp  = document.querySelector('#datos');
            resp.innerHTML = '';

            for(item of datos){
                if (item.address.zipcode == '92998-3874' || item.address.zipcode == '90566-7771'){
                    resp.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                        <td>${item.company.name}</td>
                        <td>${item.address.city}</td>
                        <td>${item.address.street}</td>
                        <td>${item.address.zipcode}</td>
                    </tr>
                    `
                }
            }
        }
    };
}*/