//funciones para representar las tablas de multiplicar
//se genera una lista mostrando los resultados de las sucesivas
//operaciones, luego se elimina la función del evento del botón
function table_of_7() {
    let target_div = document.getElementById("exer-1.1");
    let u_list = document.createElement("ul");
    target_div.appendChild(u_list);
    for (let i = 1; i <= 10; i++) {
        let elem = document.createElement("li");
        u_list.appendChild(elem); 
        elem.innerHTML = `7 x ${i} = ${7 * i}`;
    }
    let btn = document.getElementById("btn-1.1")
    btn.onclick = "";
}

function table_of_8() {
    let target_div = document.getElementById("exer-1.2");
    let u_list = document.createElement("ul");    
    target_div.appendChild(u_list);
    let i = 1;
    while (i <= 10) {
        let elem = document.createElement("li");
        u_list.appendChild(elem); 
        elem.innerHTML = `8 x ${i} = ${8 * i}`;
        i ++;
    }
    let btn = document.getElementById("btn-1.2")
    btn.onclick = "";
}

function table_of_9() {
    let target_div = document.getElementById("exer-1.3");
    let u_list = document.createElement("ul");    
    target_div.appendChild(u_list);
    let i = 1;
    do {
        let elem = document.createElement("li");
        u_list.appendChild(elem); 
        elem.innerHTML = `9 x ${i} = ${9 * i}`;
        i ++;
    } while (i <= 10)
    let btn = document.getElementById("btn-1.3")
    btn.onclick = "";
}

//funciones para realizar los calculos pedidos
//una vez mostrado el resultado se elimina la función
//del evento del botón
function operation_1() {
    let target_div = document.getElementById("exer-2.1");
    let p = document.createElement("p");
    target_div.appendChild(p);
    p.innerHTML = `${125 >> 3}`;
    let btn = document.getElementById("btn-2.1")
    btn.onclick = "";
}

function operation_2() {
    let target_div = document.getElementById("exer-2.2");
    let p = document.createElement("p");
    target_div.appendChild(p);
    p.innerHTML = `${40 << 2}`;
    let btn = document.getElementById("btn-2.2")
    btn.onclick = "";
}

function operation_3() {
    let target_div = document.getElementById("exer-2.3");
    let p = document.createElement("p");
    target_div.appendChild(p);
    p.innerHTML = `${25 >> 1}`;
    let btn = document.getElementById("btn-2.3")
    btn.onclick = "";
}

function operation_4() {
    let target_div = document.getElementById("exer-2.4");
    let p = document.createElement("p");
    target_div.appendChild(p);
    p.innerHTML = `${10 << 4}`;
    let btn = document.getElementById("btn-2.4")
    btn.onclick = "";
}

//funciones calculadora originales
function sumar() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Realizar la multiplicación
    var resultado = (numero1 + numero2).toFixed(2);
    // Mostrar el resultado en la caja de texto
    document.getElementById("resultado").value = resultado;
}
function restar() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Realizar la multiplicación
    var resultado = (numero1 - numero2).toFixed(2);
    // Mostrar el resultado en la caja de texto
    document.getElementById("resultado").value = resultado;
}
function multiplicar() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Realizar la multiplicación
    var resultado = (numero1*numero2).toFixed(2);
    // Mostrar el resultado en la caja de texto
    document.getElementById("resultado").value = resultado;
}
function dividir() {
    // Obtener los valores de los números ingresados
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    // Realizar la multiplicación
    var resultado = (numero1/numero2).toFixed(2);
    // Mostrar el resultado en la caja de texto
    document.getElementById("resultado").value = resultado;
}

/*función calculadora única, con condicionales if
function calculadora(operation) {
    if (operation == 'sum') {
        // Obtener los valores de los números ingresados
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        // Realizar la multiplicación
        var resultado = (numero1 + numero2).toFixed(2);
        // Mostrar el resultado en la caja de texto
        document.getElementById("resultado").value = resultado;
    } else if (operation == 'res') {
        // Obtener los valores de los números ingresados
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        // Realizar la multiplicación
        var resultado = (numero1 - numero2).toFixed(2);
        // Mostrar el resultado en la caja de texto
        document.getElementById("resultado").value = resultado;
    } else if (operation == 'mul') {
    // Obtener los valores de los números ingresados
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        // Realizar la multiplicación
        var resultado = (numero1*numero2).toFixed(2);
        // Mostrar el resultado en la caja de texto
        document.getElementById("resultado").value = resultado;      
    } else if (operation == 'div') {
        // Obtener los valores de los números ingresados
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        // Realizar la multiplicación
        var resultado = (numero1/numero2).toFixed(2);
        // Mostrar el resultado en la caja de texto
        document.getElementById("resultado").value = resultado;
    }
}
*/

//calculadora con switch
function calculadora(operation) {
    switch (operation) {
        case 'sum':
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1 + numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
            break;
        case 'res':
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1 - numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
            break;
        case 'mul':
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1*numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
            break;
        case 'div':
            // Obtener los valores de los números ingresados
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            // Realizar la multiplicación
            var resultado = (numero1/numero2).toFixed(2);
            // Mostrar el resultado en la caja de texto
            document.getElementById("resultado").value = resultado;
            break;
        default:
            window.alert('Operación no disponible.')
    }
}