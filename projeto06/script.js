function aleatorio(nmin,nmax){ //função para gerar um número de 0 a 360
    nmin = Math.ceil(nmin)
    nmax = Math.floor(nmax)
    n = Math.floor(Math.random()*(nmax-nmin)+nmin)
    n2 = Math.floor(Math.random()*(100 - nmin)+nmin)
    n3 = Math.floor(Math.random()*(100-nmin)+nmin)
    console.log(n)
    return n,n2,n3
}

function mudar() {
    aleatorio(0, 360)
    container = document.querySelector('div.container') //recebe o fundo como variavel
    span = document.querySelector('span#span') //recebe o span
    container.style.backgroundColor = `hsl(${n},${n2}%,${n3}%)` //troca a cor de fundo
    span.innerHTML = container.style.backgroundColor
}
