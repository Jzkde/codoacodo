var categoria = document.getElementById("categoria");
var cantidad = document.getElementById("cantidad");

function compra() {
    
    var valorCategoria = categoria.value
    
    var valorCantiad = cantidad.value
    
    var total = valorCantiad*200
    
    var desc = (100-valorCategoria)*total/100
    
    var total = document.getElementById("total");
    total.value = "Total a pagar: $" + desc;
}

function reset() {
    
    var formulario = document.getElementById("formulario")
    formulario.reset()
    var total = document.getElementById("total")
    total.value = "Total a pagar: $"
}