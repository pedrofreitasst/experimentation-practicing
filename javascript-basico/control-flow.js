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

const senha = '123456';

if (senha.length >= 8){ console.log('senha forte o suficiente');}

else {console.log('senha pequena demais');} //se a condição for falsa, ele executa o código dentro do bloco else



