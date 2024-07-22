let numeroS = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroS === numeroUsuario);
    if(numeroUsuario===numeroS){
        asignarTextoElmento('p', `acertaste el numero secreto en ${Intentos} ${(Intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('Disabled');
        
    }else{
        //el usuario no acertó
        if(numeroS > numeroUsuario){
            asignarTextoElmento('p', 'El numero es mayor');
        }else{
            asignarTextoElmento('p', 'El numero es menor');
        }
    
    Intentos++;
    limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}


function asignarTextoElmento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros:
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElmento('p', 'Ya se acabaron todos los numeros posibles ¡Felicidades!');
    }else{
        
        //Si el numero generado está incluido en la lista entonces:
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}
function CondicionesInciales(){
    
asignarTextoElmento('h1', 'Juego del numero secreto');
asignarTextoElmento('p', `Digita un número del 1 al ${numeroMaximo}`);
numeroS = generarNumeroSecreto();
Intentos = 1;
}
function reinicarJuego(){
    //limpiar Caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el numero aleatorio
    //rehacer el numero de intentos
     CondicionesInciales()
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('Disabled','true');
}
/*
function habilitarIntentar() {
    document.querySelector('button[onclick="verificarIntento();"]').removeAttribute('disabled');
}
function deshabilitarIntentar() {
    document.querySelector('button[onclick="verificarIntento();"]').setAttribute('disabled', 'true');
}*/
CondicionesInciales();