const lista = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'];

/* const global = element.innerHTML;
console.log(global.innerHTML); */

function AccionInnerHTML() { 
    let ConseguirDatoInicial = document.getElementById("botones").innerHTML;
    document.getElementById("TextoResultante").innerHTML = "El texto inicial es: " + ConseguirDatoInicial;
} 

/* function reaccion1 () {
    let primero = document.getElementsByClassName("boton1");
    alert("¡Has seleccionado el Botón 1!");
}

function reaccion2 () {
    let segundo = document.getElementsByClassName("boton2");
    alert("¡Has seleccionado el Botón 2!");
}

function reaccion3 () {
    let tercero = document.getElementsByClassName("boton3");
    alert("¡Has seleccionado el Botón 3!");
}

function reaccion4 () {
    let cuarto = document.getElementsByClassName("boton4");
    alert("¡Has seleccionado el Botón 4!");
} */