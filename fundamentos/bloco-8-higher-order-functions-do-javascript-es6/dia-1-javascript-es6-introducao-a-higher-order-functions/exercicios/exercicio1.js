//! 1
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

//! 2 
// Math.ceil arredonda o num para cima,
// Math.random sortei um num aleatorio.

const sorteio = (num) => Math.ceil(Math.random() * 5) == num;

const resultado = (num2) => sorteio(num2) ? "Parabéns, você ganhou!" : "Tente novamente";

console.log(resultado(3));


//! 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

