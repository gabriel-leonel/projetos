var numtxt = document.querySelector('span#num')
numtxt.innerHTML = '0'
var num = numtxt.innerHTML

function dim() {
    num --
    numtxt.innerHTML = num
    trocar()
}
function zer() { 
    num = 0 
    numtxt.innerHTML = num
    trocar()
}
function acr() { 
    num++
    numtxt.innerHTML = num
    trocar()
}
function trocar() { 
    if (numtxt.innerHTML > 0) {
        numtxt.style.color = 'green'
    }
    else if (numtxt.innerHTML == 0) {
        numtxt.style.color = 'black'
    }
    else { 
        numtxt.style.color = 'red'
    }
}