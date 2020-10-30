
const lista = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'];

let padre_botones = document.querySelector("#listado_botones");
let text_a_endevinar = document.querySelector("p");
let numero_aleatori = numeroAleatori();
let numero_vides = 3;



crear_missatge_amb_paraula_aleatoria(numero_aleatori);
crear_botons();


function callback_botons(evento) {

    let missatge = "Fallaste!";

    canviar_text_boto(evento);

    if (boto_correcte(evento)) {
        missatge = "Acertaste!";
        resetejar_joc();
    }
    else {
        numero_vides--;

        if (numero_vides <= 0) {
            missatge = 'Has perdido!';
            resetejar_joc();
        }
    }

    pintar_missatge(missatge);

}

function resetejar_joc() {

    numero_aleatori = numeroAleatori();
    let listado_de_botones = document.getElementById("listado_botones");

    listado_de_botones.innerHTML = ""; // netejem tot el section
    numero_vides = 3;

    crear_botons();
    crear_missatge_amb_paraula_aleatoria(numero_aleatori);
}

function pintar_missatge(msg) {
    let p_missatge_sortida = document.getElementById("mensaje_salida");
    p_mensaje_salida.innerText = msg;
    console.log("missatge: ", msg);
}

function crear_missatge_amb_paraula_aleatoria(aleatori) {
    text_a_endevinar.innerText = `Adivina dónde está la palabra: '${lista[aleatori]}'`;
}

function crear_botons() {
    for (let i = 0; i < lista.length; i++) {

        let objeto_boton = document.createElement('button');
        objeto_boton.innerText = 'Adivina';
        objeto_boton.addEventListener('click', callback_botons);
        objeto_boton.id = i;
        padre_botones.appendChild(objeto_boton);
    }
}

function canviar_text_boto(evento) {
    let indice = evento.originalTarget.id;
    evento.originalTarget.innerText = lista[indice]; // canviant el text del botó per la posició de l'array
}

function boto_correcte(evento) {
    let text_boto = evento.originalTarget.innerText;
    let text_aleatori = lista[numero_aleatori];

    if (text_boto == text_aleatori) {
        return true;
    }
    return false;
}

function numeroAleatori() {
    return Math.floor(Math.random() * lista.length);
}
