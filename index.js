const modolectura = 0;
const modonormal = 1;

let boton = document.querySelectorAll("button");
boton [modolectura].addEventListener("click", botonModoLectura);
boton [modonormal].addEventListener("click", botonModoNormal);

function botonModoLectura() {
    let boton1 = document.getElementsByTagName ("body")[0];
    boton1.style.backgroundColor = "grey";
}
function botonModoNormal() {
    let boton2 = document.getElementsByTagName ("body")[0];
    boton2.style.backgroundColor = "white";
}

