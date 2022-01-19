// !1 - função que retorne um objeto no formato { nomeCompleto, email }. A função recebe como parâmetro o nome completo e a partir dele gera automaticamente um email no formato nome_da_pessoa@trybe.com.

//.toLowerCase() - faz as letra maiusculas, ficarem minusculas
//.split('') em cada espaço inclui _ com o .join('_') 

 const novoFuncionario = (nomecompleto) => {
      const email = nomecompleto.toLowerCase().split(' ').join('_');
      return (`email: ${email}@trybe.com`);
  }

  const newEmployees = (callback) => {
      const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
      }
      return employees;
    };

    console.log(newEmployees(novoFuncionario));

//! 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// Math.ceil arredonda o num para cima,
// Math.random sortei um num aleatorio.

const sorteio = (num) => Math.ceil(Math.random() * 5) == num;

const resultado = (num2) => sorteio(num2) ? "Parabéns, você ganhou!" : "Tente novamente";

console.log(resultado(3));


//! 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//* Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.