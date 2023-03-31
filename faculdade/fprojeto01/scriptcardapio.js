var prato01 = document.querySelector('div#prato01')
var prato02 = document.querySelector('div#prato02')
var prato03 = document.querySelector('div#prato03')

function next1() { 
    prato01.style.display = "none"
    prato02.style.display = "inline"
    document.body.style.backgroundImage =  "url(../imgs/lasanha-grande.jpg)"
}
function next2() { 
    prato02.style.display = "none"
    prato03.style.display = "inline"
    document.body.style.backgroundImage =  "url(../imgs/churros-grande.jpg)"
}
function next3() { 
    prato03.style.display = "none"
    prato01.style.display = "inline"
    document.body.style.backgroundImage =  "url(../imgs/lula-grande.jpg)"
}
function previous1() { 
    prato01.style.display = "none"
    prato03.style.display = "inline"
    document.body.style.backgroundImage =  "url(../imgs/churros-grande.jpg)"
}
function previous2() { 
    prato02.style.display = "none"
    prato01.style.display = "inline"
    document.body.style.backgroundImage =  "url(../imgs/lula-grande.jpg)"
}
function previous3() { 
    prato03.style.display = "none"
    prato02.style.display = "inline"
    document.body.style.backgroundImage =  "url(../imgs/lasanha-grande.jpg)"
}
