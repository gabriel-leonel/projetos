

function calcular() {
    var valor1 = document.querySelector('input#iptRange').value * 5
    var valor2 = document.querySelector('input#iptNum').value
    var valor2txt = String(valor2)
    if (valor2txt.length <= 0) { 
        window.alert('Por favor, insira um número!')

    }
    else {
        var res = document.querySelector('p#res')
        res.innerHTML = `${valor1}% de ${valor2} é ${((valor1 / 100) * valor2).toFixed(2)}`
    }
}

