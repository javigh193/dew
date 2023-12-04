window.onload = function () {
    document.getElementById('nombre').addEventListener('blur', toUpperOnBlur);
    document.getElementById('apellidos').addEventListener('blur', toUpperOnBlur);
    document.getElementById('enviar').addEventListener('click', validateName);
    document.getElementById('enviar').addEventListener('click', validateSurnames);
    document.getElementById('enviar').addEventListener('click', validateAge);
    document.getElementById('enviar').addEventListener('click', validateNIF);
}

/* expresiones regulares compiladas para ser más eficiente en su uso */
regexNIF = new RegExp(/^\d{8}-[A-Za-z]$/); 
/* 
^ : indica que se controla cómo debe empezar la cadena de texto
\d{8} : la barra invertida escapa el caracter 'd' para que signifique dígito, '{8}' indica que 
        se esperan 8 elementos del tipo indicado anteriormente, en este caso dígitos
[A-Za-z]: indica que se espera un caracter alfabético comprendido entre la 'a' y la 'z', valiendo
          tanto mayúsculas como minúsculas
$ : el dolar indica que se controla cómo debe terminar la cadena
*/

function toUpperOnBlur(event) {
    let element = event.target
    element.value = element.value.toUpperCase()
}

function validateName(event) {
    let element = document.getElementById('nombre');
    if (element.value === '') {
        let err_div = document.getElementById('errores')
        err_div.style.padding = '5px';
        err_div.innerHTML = 'El nombre es un campo obligatorio, por favor, introduzca un nombre.'
        element.focus()
    } 
    event.preventDefault();
}

function validateSurnames(event) {
    let element = document.getElementById('apellidos');
    if (element.value === '') {
        let err_div = document.getElementById('errores');
        err_div.style.padding = '5px';
        err_div.innerHTML = 'Los apellidos son campos obligatorios, por favor, introduzca unos apellidos.';
        element.focus();
    } 
    event.preventDefault();
}

function validateAge(event) {
    let element = document.getElementById('edad');
    let edad = element.value;
    if (edad === '') {
        let err_div = document.getElementById('errores')
        err_div.style.padding = '5px';
        err_div.innerHTML = 'La edad es un campo obligatorio, por favor, introduzca una edad.';
        element.focus();
    } else if ( isNaN(edad) || edad < 0 || edad > 105) {
        let err_div = document.getElementById('errores');
        err_div.style.padding = '5px';
        err_div.innerHTML = 'La edad debe ser un valor numérico comprendido entre 0 y 105, por favor, introduzca una edad válida.';
        element.focus();
    }
    event.preventDefault();
}

function validateNIF(event) {
    let element = document.getElementById('nif');
    let nif = element.value;
    if (nif === '') {
        let err_div = document.getElementById('errores');
        err_div.style.padding = '5px';
        err_div.innerHTML = 'El NIF es un campo obligatorio, por favor, introduzca un NIF.';
        element.focus();
    } else if ( !regexNIF.test(nif) ) {
        let err_div = document.getElementById('errores');
        err_div.style.padding = '5px';
        err_div.innerHTML = 'El NIF introducido no es válido, por favor, introduzca un NIF válido.';
        element.focus();
    }
    event.preventDefault();
}
