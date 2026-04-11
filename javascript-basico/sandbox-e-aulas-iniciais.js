//valores e variaveis
/*
let variavel = 25;
let variavelNova = 40;
console.log(variavel, variavelNova);
//Ainda funciona colocar comentarios assim //variavelNova = 50;
variavel = 30;
console.log(variavel, variavelNova);
let variavelNull = null;
console.log(variavelNull);
const constante = 100;
console.log(constante);



//strings

console.log('titicotico, o bobao');

let email = 'pedrofreitasst@gmail.com';
console.log(email);
//concatenação

let nome = 'Pedro Henrique';
let sobrenome = 'de Freitas';
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

//pegando caracteres

console.log(nome[0]);


//lenght

console.log(nomeCompleto.length);

//string methods

console.log(nomeCompleto.toUpperCase());
let restultado = nomeCompleto.toLowerCase();
console.log(restultado, nomeCompleto);

let index = email.indexOf('@');
console.log(index);

//mais metodos de strings

let email2 = 'clara.greg@gmail.com';
let restultado2 = email2.lastIndexOf('r');
console.log(restultado2);

let resultado3 = email2.slice(0, 5);
console.log(resultado3);

let resultado4 = email2.substring(2, 5);
console.log(resultado4);

let result = email2.replace('greg', 'freitas');
console.log(result, email2);

*/
/*
//Numeros e variaveisl

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators +, -, *, /, **, %

console.log(10/2);
let restult = radius % 3; //resto da divisão, ou seja, o que sobra depois de dividir 10 por 3, que é 1
console.log(restult);

let result = pi * radius **2; //calculo da area do circulo, que é pi vezes o raio ao quadrado "**" é o operador de potenciação, ou seja, ele eleva o raio ao quadrado
console.log(result);

//ordem de precedencia - primeiro os parenteses, depois as potencias, depois a multiplicação e divisão, e por ultimo a soma e subtração

let resultado2 = 5 * (10-5) ** 3;
console.log(resultado2);

let curtidas = 10;
curtidas = curtidas + 1; //incrementando a variavel curtidas, ou seja, somando 1 a ela
console.log(curtidas);
curtidas++; //outra forma de incrementar a variavel curtidas, ou seja, somando 1 a ela
console.log(curtidas);
curtidas--; //decrementando a variavel curtidas, ou seja, subtraindo 1 dela
console.log(curtidas);
curtidas += 5; //outra forma de incrementar a variavel curtidas, ou seja, somando 5 a ela
console.log(curtidas);
curtidas -= 2; //outra forma de decrementar a variavel curtidas, ou seja, subtraindo 2 dela
console.log(curtidas);

//NaN - Not a Number
let resultado3 = 'hello' * 3; //NaN, ou seja, não é um numero, porque não é possível multiplicar uma string por um numero
console.log(resultado3);

//concatenação de numeros e strings

let resultado4 = 'o site tem ' +curtidas + ' curtidas'; //concatenação de string com numero, ou seja, o resultado é uma string que contém o numero de curtidas
console.log(resultado4);*/

//template strings - outra forma de concatenar strings, usando crase e ${} para inserir variaveis dentro da string
/*
let nome = 'pedro henrique';
let idade = 31;
let cidade = 'rio de janeiro';

let apresentacao = `meu nome é ${nome}, tenho ${idade}, e moro em ${cidade}`;
console.log(apresentacao);

//criando templates de html usando template strings

let html = `
<h1>${nome}</h1>
<p>com a idade de ${idade} anos</p>
<p>more na cidade de ${cidade}</p>
;
`;
console.log(html);

*/

//arrays - listas de valores, que podem ser de qualquer tipo, e são indexados, ou seja, cada elemento tem um indice, que começa em 0

//let membros = ['pedro', 'clara', 'vincenzo'];

//console.log(membros[1]); //acessando o elemento do indice 1, que é 'clara'
//membros[2] = 'vincenzo freitas'; //alterando o elemento do indice 2, que é 'vincenzo', para 'vincenzo freitas'
//console.log(membros);

//let idades = [31, 30, 29];
//console.log(idades[0]); //acessando o elemento do indice 0, que é 31    

//let misturado = membros.join(','); //juntando os elementos do array membros em uma string, separando por virgula
//console.log(misturado);

//let resultado = misturado.concat(' e mais alguns membros', ' e um pouco mais'); //concatenando a string misturado com outra string
//console.log(resultado);

//let aleatorio = ['pedro', 31, true, null, undefined, ['clara', 'vincenzo']]; //array misturado, que contém elementos de diferentes tipos
//console.log(aleatorio);
//console.log(membros.length); //tamanho do array membros, ou seja, quantos elementos ele tem

//let resultado2 = membros.indexOf('vincenzo freitas'); //procurando o indice do elemento 'vincenzo freitas' no array membros, ou seja, o resultado é o indice 2
//console.log(resultado2);

//let resultado = membros.push('julia'); //adicionando o elemento 'julia' no final do array membros, e retornando o novo tamanho do array
//console.log(membros);
/* 
let idade = null;
console.log(idade, idade+3, `a idade é ${idade}`); //null é um valor especial que representa a ausência de valor, ou seja, ele não tem um valor definido, e quando tentamos fazer operações com ele, o resultado é NaN (Not a Number) ou uma string com o valor "null" dependendo do contexto.


let valor;

console.log(valor, valor+3, `o valor é ${valor}`); //undefined é um valor especial que representa a ausência de valor, ou seja, ele não tem um valor definido, e quando tentamos fazer operações com ele, o resultado é NaN (Not a Number) ou uma string com o valor "undefined" dependendo do contexto.

//boleans e comparações

console.log(true, false); //valores booleanos, que representam verdadeiro e falso

let email = 'pedro@gmail.com'

let resultado = email.includes('@'); //verificando se a string email contém o caractere '@', o resultado é true, porque a string email contém o caractere '@'
console.log(resultado);
let nomes = ['pedro', 'clara','vincenzo'];

let resultado2 = nomes.includes('clara'); //verificando se o array nomes contém o elemento 'clara', o resultado é true, porque o array nomes contém o elemento 'clara'
console.log(resultado2);

//STRICT COMPARISON - comparação estrita, que compara o valor e o tipo dos operandos, ou seja, ele retorna true somente se os operandos são iguais em valor e tipo

console.log(idade == 25); //comparação frouxa, que compara somente o valor dos operandos, ou seja, ele retorna true se os operandos são iguais em valor, mesmo que sejam de tipos diferentes
console.log(idade =='25'); //comparação frouxa, que compara somente o valor dos operandos, ou seja, ele retorna true se os operandos são iguais em valor, mesmo que sejam de tipos diferentes
console.log(idade != 25); //comparação frouxa, que compara somente o valor dos operandos, ou seja, ele retorna true se os operandos são diferentes em valor, mesmo que sejam de tipos diferentes
console.log(idade != '25'); //comparação frouxa, que compara somente o valor dos operandos, ou seja, ele retorna true se os operandos são diferentes em valor, mesmo que sejam de tipos diferentes

console.log(idade === 25); //comparação estrita, que compara o valor e o tipo dos operandos, ou seja, ele retorna true somente se os operandos são iguais em valor e tipo
console.log(idade === '25'); //comparação estrita, que compara o valor e o tipo dos operandos, ou seja, ele retorna true somente se os operandos são iguais em valor e tipo
console.log(idade !== 25); //comparação estrita, que compara o valor e o tipo dos operandos, ou seja, ele retorna true somente se os operandos são diferentes em valor ou tipo
console.log(idade !== '25'); //comparação estrita, que compara o valor e o tipo dos operandos, ou seja, ele retorna true somente se os operandos são diferentes em valor ou tipo

//conversão de tipos

let vallor = '100';
vallor = Number(vallor); //convertendo a string '100' para o numero 100, usando a função Number()

console.log(vallor+1); //o resultado é 101, porque a string '100' foi convertida para o numero 100, e depois somada com 1
console.log(typeof vallor);

let valor2 = String(50);
console.log(valor2, typeof valor2); //o resultado é '50' e 'string', porque o numero 50 foi convertido para a string '50', usando a função String()

let resultado2 = boolean(''); //convertendo a string vazia para o valor booleano false, usando a função Boolean()  
let resultado3 = boolean('hello'); //convertendo a string 'hello' para o valor booleano true, usando a função Boolean()

*/