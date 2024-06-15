// <== "prompt" neste caso em específico é o nome da variável que defini para atribuir ao nome da biblioteca 'readline-sync'. E no momento em que eu for chamar essa variável na próxima definição, eu devo adicionar a propriedade recomendada pela biblioteca que é: '.question'.

// A propriedade "require" é definida no javascript como sendo para importar arquivos de bibliotecas para o documento.

const prompt = require('readline-sync');

const idade = prompt.question("Qual e a sua idade?");

const idadeNumber = Number(idade); // <== Aplicação da coerção explícita para transformar o valor string para number através do valor "Number".

console.log(idadeNumber, typeof idadeNumber);

// Coerçao Explícita (Conversão Manual)
console.log(Number('x')); //NaN: Not a Number

console.log(String(10));

console.log(Boolean(2));

//Coerção implícita (Conversão Automática)

// Quando temos uma operação com adição, ele transforma o número em texto e realiza uma concatenação juntando os textos em tela.
console.log(1 + "1"); // Resultado = 11
console.log(10 + "5"); // Resultado = 105

// Quando temos uma operação com subtração ou outras operações exceto adição, ele transforma o texto em número e realiza a operação matemática.
console.log(10 - "5"); // Resultado = 5
console.log(10 * "5"); // Resultado = 50
console.log(10 / "5"); // Resultado = 2


// Qual será a saída desse código?
let n = 1 + "1" // Resultado = '11' (String)

n = n - 1 // 11 - 1 = 10

console.log(n) 

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5") // Resultado = 5 + 4 + '5' = 9 + '5' = '95'

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4) // Resultado = '52' + 3 + 4 = '523' + 4 = '5234'

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5') // Resultado = 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'