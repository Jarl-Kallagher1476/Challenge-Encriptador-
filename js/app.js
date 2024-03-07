//Variables
const campoTexto = document.querySelector('.campo-mensaje ')
const campoMensaje = document.querySelector('#texto-encriptado')
const botonLimpiar = document.querySelector('#limpiar');


//Funciones
limpiar();

const matriz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
]

function btnEncriptar() {
    const texto = encriptar(campoTexto.value)
    campoMensaje.value = texto
}

function convertirAMinusculas(e) {
    e.value = e.value.toLowerCase();
}

function btnDesencriptar() { 
    const texto = desencriptar(campoTexto.value)
    campoMensaje.value = texto
}

function encriptar(txt) {
    for (let i = 0; i < matriz.length; i++) {
        if (txt.includes(matriz[i][0])) {
            txt = txt.replaceAll(
                matriz[i][0],
                matriz[i][1]
            )
        }
    }
    return txt
}

function desencriptar(txt ) {
    for (let i = 0; i < matriz.length; i++) {
        if (txt.includes(matriz[i][1])) {
            txt = txt.replaceAll(
                matriz[i][1],
                matriz[i][0]
            )
        }
    }
    return txt
}
//Copiar Codigo del textarea 
function copiarCodigo() {
    const codigoTextarea = document.getElementById('texto-encriptado');
    codigoTextarea.select();
    document.execCommand('copy');
    alert('Código copiado al portapapeles.');
}

//limpiar el textarea
function limpiar() {
    campoTexto.value = ''
    // Verificar si campoTexto está vacío y limpiar campoMensaje si es así
    if (campoTexto.value === '') {
        campoMensaje.value = '';
    }
}