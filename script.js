window.onload = init;
var petalos;
var valores;

function init() {
    petalos = document.getElementsByClassName("petalo");
    var ventana_actual = document.getElementById("intro");
    var ventana_juego = document.getElementById("juego");
    ventana_actual.className = "hidden";

    setTimeout(function() {
        ventana_juego.className = "animated fadeIn";
        asignarValores();
    }, 1000); // Agregamos un retraso de 1000 milisegundos (1 segundo) antes de mostrar la flor

    asignarEvento();
}

function asignarValores() {
    var numero_aleatorio = Math.round(Math.random() * 10);
    var moneda = numero_aleatorio > 5;
    valores = [];
    for (var i = 0; i < petalos.length; i++) {
        valores[i] = moneda;
        moneda = !moneda;
    }
}

function colorAleatorio() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function asignarEvento() {
    for (var i = 0; i < petalos.length; i++) {
        petalos[i].addEventListener("click", function(event) {
            animar(event.target);
        });
    }
}

function animar(petalo) {
    var id_petalo = petalo.id;

    // Cambiar el color del centro a un color claro al hacer clic en un pétalo
    centro.style.backgroundColor = colorClaroAleatorio();
    validarJugada(id_petalo);
}

// Función para obtener un color claro aleatorio
function colorClaroAleatorio() {
    var r = Math.round(Math.random() * 128) + 128; // Rojo claro
    var g = Math.round(Math.random() * 128) + 128; // Verde claro
    var b = Math.round(Math.random() * 128) + 128; // Azul claro
    return "rgb(" + r + "," + g + "," + b + ")";
}

function validarJugada(petalo) {
    var indice = parseInt(petalo.substr(1));
    var mensajeAleatorio = obtenerMensajeAleatorio();
    texto_mensaje.innerHTML = mensajeAleatorio;
    mensaje.className = "mostrar animated fadeIn";
    setTimeout(() => {
        mensaje.className = "hidden";
    }, 1500);
}

// Función para obtener un mensaje aleatorio de la lista de mensajes
function obtenerMensajeAleatorio() {
    var indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    return mensajes[indiceAleatorio];
}

var mensajes = [
    "¡Hola Marce! Espero que tengas un día genial.",
    "Recuerda siempre ser tú misma, ¡eres increíble!",
    "Tus sonrisas iluminan cualquier lugar.",
    "Tu alegría es contagiosa, ¡sigue así!",
    "Eres fuerte y valiente en todo lo que haces.",
    "Que tengas un día lleno de éxitos y alegría.",
    "Tu positividad es inspiradora para todos nosotros.",
    "Sigue brillando y haciendo lo que amas.",
    "Siempre tienes una forma especial de hacer que todo sea divertido.",
    "No hay problema que no puedas enfrentar, ¡tienes un espíritu imparable!",
    "Marce, eres una persona maravillosa y apreciada por todos.",
    "Tu entusiasmo es inspirador, ¡sigue así!",
    "Que tu día esté lleno de risas y momentos felices.",
	"Que este día te traiga muchas sonrisas."
];
