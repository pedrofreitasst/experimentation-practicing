//for loops


/*
for (let i = 0; i < 5; i++) {

 console.log('em loop',i);


}//Faz loop enquanto a condição em cima for valida (vulgo i for menor que 5)

console.log('loop terminado');//mensagem depois do fim do loop


const nomes = ['pedro', 'clara', 'vincenzo'];

for(let x = 0; x < nomes.length; x++){

//console.log(x);

//console.log(nomes[x]);//sem o [x] ele mostra todos os nomes, com o [x] ele mostra o nome corresponente a posição no array, ou seja, a posição 0 é pedro, a posição 1 é clara e a posição 2 é vincenzo

let hmtl = `<div>${nomes[x]}</div>`;//template string, usando crase e ${} para colocar a variável dentro da string

console.log(hmtl);
*/

let i = 0;

const nomes = ['pedro', 'clara', 'vincenzo'];

while(i<nomes.length){

 console.log(nomes[i]);
 
 console.log('loop while em ação');
 
 i++;


}//Faz loop enquanto a condição em cima for valida (vulgo i for menor que o tamanho do array nomes)


let y = 3;

do{
    console.log('entrar pelo loop pelo menos uma vez', y);
 
    y++;

} while (y<3); //faz o loop pelo menos uma vez já que a condição é "falsa" desde o inicio, basicamente um "faça enquanto", se eu mudar o "espaço" entre o valor de y original e o do while o numero de "voltas" do loop vai se adaptar


//if

const idade = 25;

if(idade >25){ console.log ('você tem mais de 25 anos');} //se a condição for verdadeira, ele executa o código dentro do bloco

const nomes2=['pedro', 'clara', 'vincenzo'];

if (nomes2.length>2){ console.log('uma familia linda');} //se a condição for verdadeira, ele executa o código dentro do bloco

/*const senha = '123456';

if (senha.length >= 8){ console.log('senha forte o suficiente');}

    else if(senha.length >= 6 && senha.length < 8){console.log('quaaase lá, mas ainda não é o suficiente');} //para quando o valor está entre valores, usando else if para criar uma nova condição em um efeito quase cascata
    
    
        else{console.log('senha pequena demais');} //se a condição for falsa, ele executa o código dentro do bloco else
 
*/

//operadores OU || e E &&

const senha = '1234#s56';

if (senha.length >= 8 && senha.includes('#')){ console.log('senha forte o suficiente');}

    else if(senha.length >= 6 || senha.length <8 && senha.includes('#')){console.log('Falta alguns caracteres');} //para quando o valor está entre valores, usando else if para criar uma nova condição em um efeito quase cascata
    
    
        else{console.log('senha pequena demais');} //se a condição for falsa, ele executa o código dentro do bloco else

//para executar se a condição for falsa:

let usuario =false;

if (!usuario){ console.log('usuario não logado');} //o ! inverte o valor da variável, ou seja, se usuario for false, ele vai executar o código dentro do bloco, se usuario for true, ele não vai executar o código dentro do bloco


//break e continue

const numeros = [1,2,3,4,5,6,17,18,920];

for(let i = 0; i<numeros.length; i++){


    if(numeros[i] === 1){continue;}//quando o numero 1 for encontrado, o loop vai pular para a próxima iteração, ou seja, ele não vai executar o código dentro do bloco para o numero 1, mas vai continuar executando para os outros numeros

    console.log(numeros[i]);



    if(numeros[i] === 7){console.log('recebeu break');   break;} //quando o numero 7 for encontrado, o loop vai ser interrompido e não vai mais executar o código dentro do bloco

   


}


//switch

const nota = '9';

switch (nota) {

case '10':
    console.log('nota maxima');
    break;

case '9':
    console.log('nota quase maxima');
    break;

default:
    console.log('nota invalida');


}

//variaveis e escopo

let idade2 = 30; //variavel global, ou seja, pode ser acessada de qualquer lugar do código

if(true){
    let idade2 = 31; //variavel local, só afeta dentro do próprio bloco de codigo, ou seja, dentro do if, fora do if a variavel idade2 continua sendo 30
//qualquer variavel criada dentro de um blco de codigo, como um if, um for, um while, etc, é uma variavel local, ou seja, só pode ser acessada dentro do próprio bloco de codigo, fora do bloco de codigo ela não existe, então não retorna nada. nem undefined.
    console.log('dentro do bloco de codigo', idade2); //variavel global, ou seja, pode ser acessada de qualquer lugar do código
 if(true){console.log('dentro de um segundo bloco de codigo', idade2);} //sendo um bloco dentro do outro, a variavel idade2 retorna o valor mais próximo, vulgo o modificado por ultimo, ou 31, e se eu modificar o valor com let ou const dentro desse segundo bloco, ele tera o escopo dentro dele mesmo
}

console.log('fora do bloco de codigo', idade2); //variavel global, ou seja, pode ser acessada de qualquer lugar do código

