
function calcularCosto (edad) {
    var t = document.getElementById("edad");
    edad = parseInt(t.value);
    if ( edad >= 4 && edad <= 18) {
        resultado.innerHTML ="El precio de la entrada es de $8.500";
    } 
    else if (edad > 18) {
        resultado.innerHTML = "El precio de la entrada es de $12.000";
    }
	else {
        resultado.innerHTML = "Puede entrar Gratis!";
    }
}
var resultado = document.getElementById("resultado");
var b = document.getElementById("entrada");
b.addEventListener("click", calcularCosto);