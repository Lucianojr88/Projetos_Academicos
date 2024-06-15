// console.log('Hello World');
// console.log('Estamos na aula de javascript');

// CamelCase==> uso do nome composto, a primeira palavra em minúsculo e todas as outras iniciais em maiúsculo. Não começar com números!!!

//Javascript possui tipagem dinâmica: infere os tipos de dados.
//Javascript possui tipagem fraca. 
var nomeDoProfessor = 'Luciano Cabral'; // tipo "string" (texto), utilizar sempre aspas.
var idade = 27; // tipo "int", javascript interpreta como "number".
var altura = 1.83; // tipo number
var estudando = true; // tipo booleano (verdadeiro ou falso).

console.log(nomeDoProfessor, typeof nomeDoProfessor)
console.log(idade, typeof idade)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)

var semConteudo; //definindo uma variável sem atribuição, gera o tipo "undefined".

console.log(semConteudo)

var curso = "Front-End", topico = "Javascript"
console.log(curso, topico)

// ! Não utilize o "var" nos seus códigos JavaScript("ultrapassados") 
//Porquê? A variável "var" é uma variável global e pode ser usada em qualquer lugar do código javascript

// let, do "let it change" (deixe que mude)
// const, do "constante" (não deve ser alterado)

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// mediaDoAluno = 5;  ! Não é permitido!

console.log(notaDoAluno, mediaDoAluno)