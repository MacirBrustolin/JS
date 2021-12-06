//Não podemos criar constantes com palavras reservadas (IF, LET, Etc.).
//Constantes precisam ter nomes significativos.
//Não pode começar o nome da constante com um número.
//Não podem conter espaços ou traços.
//é utilizado o camelCase.
//Case sensitive (letras maiúsculas e minúsculas fazem diferença).
//Não pode redeclarar constantes com LET.
//Não é possível mudar o valor de uma constante.

//String = texto | Number = Número

const nome = 'João';
console.log(nome);

const primeiroNumero = 5; //Number
const segundoNumero = '10';
const resultado = primeiroNumero * segundoNumero;

console.log(resultado);

console.log('tipo do primeiro número: ', typeof(primeiroNumero));
console.log('tidpo do segundo numero: ', typeof(segundoNumero));

const nomeEx = 'Macir';
const sobreNomeEx = 'Brustolin';
const idade = 25;
const peso = 65;
const alturaEmM = 1.85;
let imc; //peso/(altura*altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log('O IMC do', nomeEx, sobreNomeEx, 'é: ', imc, '.');

anoNascimento = 2021 - idade;
console.log(nomeEx, sobreNomeEx, 'nasceu em', anoNascimento,'.');