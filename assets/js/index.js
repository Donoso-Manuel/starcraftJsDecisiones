
// Parte 1 del desafio
const imgBorde = document.querySelector('.imgHyperion');

imgBorde.addEventListener('click', function(){
    if(imgBorde.style.border === "" || imgBorde.style.border === "none"){
        document.querySelector('.imgHyperion').style.border = "solid 2px red";
        document.querySelector('.saludoHyperion').innerHTML = "Crucero de Batalla Operativo";
    }else {
        imgBorde.style.border = "";
        document.querySelector('.saludoHyperion').innerHTML = "";
    }
});

//Parte 2 del desafio

function validarDigito() {
    const valCant = document.querySelectorAll('.numero'); //selecciona todas las clases en una variable
    let esNumero = true;

    valCant.forEach(input => { // recorro la variable con foreach para cada input que exista
        if (isNaN(input.value)) { //isNAN compara sí el valor es texto , sí es texto devuelve true
            esNumero = false;
        }
    });
    const botonStickers = document.querySelector('.btnStickers');
    botonStickers.disabled = !esNumero; 
}
    function contarStickers(){
        let digito1 = document.querySelector('#sticker1');
        let digito2 = document.querySelector('#sticker2');
        let digito3 = document.querySelector('#sticker3');

        let sumaStickers = Number(digito1.value) + Number(digito2.value) + Number(digito3.value);

        if(sumaStickers > 10){
            document.querySelector('.respuestaStickers').innerHTML = "Llevas Demasiados Stickers"
        }else{
            document.querySelector('.respuestaStickers').innerHTML = "Llevas "+sumaStickers+" Stickers";
        }
        
    }

//Parte 3 del desafio
function compararClave(){
    let digPass1 = document.querySelector('.digito1').value;
    let digPass2 = document.querySelector('.digito2').value;
    let digPass3 = document.querySelector('.digito3').value;

    let passIngresada = digPass1 + digPass2 + digPass3;

    if(passIngresada === '911'){
        document.querySelector('.respuestaClave').innerHTML = "Password 1 Correcto / Bienvenido al Enjambre";
    }else if(passIngresada === '714'){
        document.querySelector('.respuestaClave').innerHTML = "Password 2 Correcto / Bienvenido al Enjambre";
    }else{
        document.querySelector('.respuestaClave').innerHTML = "Password Incorrecto";
    }
 
};