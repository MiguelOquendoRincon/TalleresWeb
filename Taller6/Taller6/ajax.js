document.querySelector('#actualizar').addEventListener('click', traerDatos);
document.querySelector('#filtrar').addEventListener('click', filtrarDatos);

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
    };
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
}