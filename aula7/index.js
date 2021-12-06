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