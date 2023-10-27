let categoria = document.getElementById("categoria");
let cantidad = document.getElementById("cantidad");

function compra() {
    
    let valorCategoria = categoria.value
    
    let valorCantiad = cantidad.value
    
    let total = valorCantiad*200
    
    let desc = (100-valorCategoria)*total/100
    
    elementoTotal = document.getElementById("total").value = "Total a pagar: $" + desc;
}

function reset() {
    
    let formulario = document.getElementById("formulario")
    formulario.reset()
    let total = document.getElementById("total")
    total.value = "Total a pagar: $"
}