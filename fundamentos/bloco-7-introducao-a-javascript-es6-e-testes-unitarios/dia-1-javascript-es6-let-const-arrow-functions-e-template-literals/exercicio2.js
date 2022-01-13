//! Fatorial de um numero

const fatorial = Num => {
    let resultado = 1;
    for (let index = 1; index <= Num; index +=1) {
        
        resultado *= index
    }
    return resultado
};

console.log(fatorial(4));

//! maior palavra da frase

const maiorPalavra = frase => {
    let palavraMaior = null;
    let resultado = 0;
    for (let palavra of frase.split(" ")){
        if (palavra.length > resultado) {
            resultado = palavra.length;
            palavraMaior = palavra;
        }
    }
    return palavraMaior
}

console.log(maiorPalavra("eu sou Tryber"));

//! quantidade de click

const botao = document.querySelector('#click')

botao.addEventListener('click', () => {
    let clickCount = document.querySelector('#contador');
    clickCount.innerHTML = parseInt(clickCount.innerHTML) + 1;
})
