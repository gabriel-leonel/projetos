function aleatorio(nmin,nmax){ //função para gerar um número de 0 a 360
    nmin = Math.ceil(nmin)
    nmax = Math.floor(nmax)
    n = Math.floor(Math.random() * (nmax-nmin)+nmin);
    
    console.log(n)
    return n
}

function mudar() {
    aleatorio(0, 360)
    container = document.querySelector('div.container') //recebe o fundo como variavel
    container.style.backgroundColor = `hsl(${n}, 50%, 50%)` //troca a cor de fundo
}
