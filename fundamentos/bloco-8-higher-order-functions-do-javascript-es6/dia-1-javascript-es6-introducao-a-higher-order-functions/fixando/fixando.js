//! 1 - Crie uma função que retorne a string 'Acordando!!'

const wakeUp = () => 'Acordando!!';

//const wakeUp = (frase) => frase;

//! 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;

const drinkCoffe = () => 'Bora tomar café!!';


//const drinkCoffe = (frase) => frase;

//! 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;

const wakeDonw = () => 'Partiu dormir!!';

//const wakeDonw = (frase) => frase;

//! 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

const doingThings = (callback) => {
    const resultado = callback()
    console.log(resultado)
}

doingThings(wakeUp);
doingThings(drinkCoffe);
doingThings(wakeDonw);