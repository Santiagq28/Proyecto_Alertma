var name;
var name2;
var lastname;
var lastname2;
var date;
var number;
var genero;
var age;

var registro;
var page;
console.log("Hola");

function cargar(){
    document.getElementById("name").focus();
    page = document.getElementById("page");
    page.style.display = "none";
}
function datos(){
    name = document.getElementById("name").value;
    name2 = document.getElementById("name2").value;
    lastname = document.getElementById("lastname").value;
    lastname2 = document.getElementById("lastname2").value;
    date = document.getElementById("date").value;
    number = document.getElementById("number").value;
    genero = document.getElementById("gender").value;
    age = document.getElementById("age").value;

    registro = document.getElementById("registro");

    if(name != "" && lastname != "" && lastname2 != "" && date != "" && number != "" && genero != "" && age != ""){
        registro.style.visibility = "hidden";

        document.getElementById("info").innerText = name;
        document.getElementById("info2").innerText = "Bienvenid@ " + name
        document.getElementById("names").innerText += name+ " "+name2;
        document.getElementById("lastnames").innerText += lastname+" "+lastname2;
        document.getElementById("dates").innerText += date;
        document.getElementById("cel").innerText += number;
        document.getElementById("genero").innerText += genero;
        document.getElementById("edad").innerHTML += age;


        page.style.display = "flex";
        

    }else{
        Swal.fire("Completa todos los campos");
    }
    
    
}
console.log("Adiós "+name);
