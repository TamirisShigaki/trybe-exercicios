//! Modifique a estrutura da função para que ela seja uma arrow function.
//! Modifique as concatenações para template literals.

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


  const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ' ótimo, fui utilizada no escopo !'`;
        console.log(ifScope);
      } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
      }
  }
  testingScope(true);

  //! Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  // Seu código aqui.
  //console.log(oddsAndEvens); // será necessário alterar essa linha 😉

  const numOrdenados = (num1, num2) => (num1 < num2) ? -1 : +1;

  console.log(oddsAndEvens.sort(numOrdenados)); 