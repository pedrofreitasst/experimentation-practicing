//declaração de função

//function oi(){console.log('ola!');}//função é um bloco de código que pode ser reutilizado, ela só é executada quando é chamada e é "puxada" para o topo do código, ou seja, ela pode ser chamada antes de ser declarada, porque o JavaScript "puxa" a declaração da função para o topo do código, então ela pode ser chamada antes de ser declarada, diferente das expressões de função, que não são "puxadas" para o topo do código, ou seja, elas só podem ser chamadas depois de serem declaradas


//expressão de função

//const fala = function(){  //função anônima, ou seja, sem nome, que é atribuida a uma variavel, ou seja, a variavel fala é uma função, não é puxada para o topo, pode ser usada como uma forma mais organizada de escrever funções, porque ela pode ser escrita dentro de um bloco de código, como um if, um for, etc, e só vai ser executada quando o bloco de código for executado, ou seja, ela pode ser usada para criar funções que só são executadas em determinadas condições, ou seja, dentro de um bloco de código, como um if, um for, etc

//console.log('bom dia!');


//};//expressão de função precisa de ; no final, porque é uma atribuição de valor a uma variavel, ou seja, a variavel fala recebe a função anônima como valor

//oi();

//fala();

//argumentos e parametros
/*
const fala = function(nome = 'standard', hora = 'qualquer'){//parametro é a variável que é declarada na função, ou seja, o parametro nome é declarado na função fala, e é usado para receber o valor que é passado para a função quando ela é chamada, ou seja, quando a função fala é chamada com o argumento 'Pedro', o valor 'Pedro' é passado para a função e é usado como o valor do parametro nome dentro da função, ou seja, o parametro nome recebe o valor 'Pedro' e é usado dentro da função para imprimir a mensagem 'Bom dia Pedro!'
    console.log(`Bom(a) ${hora}${nome}!`);


}

fala('Pedro', 'dia');//argumento é o valor que é passado para a função quando ela é chamada, ou seja, quando a função fala é chamada com o argumento 'Pedro', o valor 'Pedro' é passado para a função e é usado como o valor do parametro nome dentro da função, ou seja, o parametro nome recebe o valor 'Pedro' e é usado dentro da função para imprimir a mensagem 'Bom dia Pedro!'

//se invocar a função sem nenhum argumento, ela vai usar os valores padrão inseridos nos parâmetros, se não forem inseridos retornará undefined.
//Parametro é a variavel na declaração e argumento é o valor quando ela é chamada
//"função = function(x,y){}"

const calculodearea = function(raio){
    return 3.14 * raio ** 2;
     //return é usado para retornar um valor da função, ou seja, quando a função calculodearea é chamada com o argumento 5, o valor 5 é passado para a função e é usado como o valor do parametro raio dentro da função, ou seja, o parametro raio recebe o valor 5 e é usado dentro da função para calcular a area do circulo, e o resultado do calculo é retornado pela função, ou seja, o valor da area do circulo é retornado pela função e pode ser usado em outras partes do código, como por exemplo, para imprimir a area do circulo usando console.log(calculodearea(5));

}

const area = calculodearea(5); //não necessariamente precisa ser o mesmo nome da variavel do parametro, ou seja, o parametro raio é usado dentro da função para calcular a area do circulo, e o resultado do calculo é retornado pela função, ou seja, o valor da area do circulo é retornado pela função e pode ser usado em outras partes do código, como por exemplo, para imprimir a area do circulo usando console.log(area);
console.log(area);

const calcvolume = function(area){
    return area * 10; // Exemplo simples, você pode ajustar conforme a lógica desejada

}

console.log(calcvolume(area));

//função de seta - arrow function

const calculovolume = area =>  area * 10; //quando só tem um parametro não precisa de parentesis e quando só tem uma linha de código não precisa de chaves, o valor da area é passado para a função e é usado como o valor do parametro area dentro da função, e o resultado do calculo é retornado pela função, ou seja, o valor do volume é retornado pela função e pode ser usado em outras partes do código, como por exemplo, para imprimir o volume usando console.log(calculovolume(area));
console.log(calculovolume(area)+ 1);

//const greet = function(){
//    return 'oi meu amor';

//};

const greet = () => 'oi mi amor'; //função de seta, ou seja, uma forma mais curta de escrever funções, quando a função tem apenas uma linha de código, o valor retornado é o resultado dessa linha de código, ou seja, o valor 'oi meu amor' é retornado pela função e pode ser usado em outras partes do código, como por exemplo, para imprimir a mensagem usando console.log(greet);



const result = greet();
console.log(result);


//const conta = function(produto,imposto){
   // let valortotal = 0;
//    for(let i = 0; i<produto.length; i++){
//            valortotal+= produto[i] + produto[i] * imposto;
//
//    }
 //   return valortotal;
//
//}
//conversão para arrow function


const conta = (produto, imposto) =>{

    let valortotal = 0;//coloca o valor inicial

    for(let i = 0; i<produto.length; i++){//uma tradução "coloquial" seria 
            valortotal += produto[i] + produto[i] * imposto;
    }
    return valortotal;
}

console.log(conta([10,13,50.3], 0.4)); //se colocar para mostrar pelo console apenas a função"console.log(conta);", ele vai mostrar o código da função, ou seja, a definição da função, e não o resultado da função, porque a função não foi chamada, ou seja, ela não foi executada, para mostrar o resultado da função, é necessário chamar a função, ou seja, passar os argumentos para a função e executar o código dentro da função, como por exemplo, console.log(conta([10,20], 0.1)); para mostrar o resultado da função conta com os argumentos passados.

console.log('testando valores chamando uma segunda vez:' +conta([10,20], 0.1));


//metodos são funções que estão associadas a um objeto ou tipo de dado, ou seja, eles são usados para manipular ou acessar os dados de um objeto ou tipo de dado, como por exemplo, o método toUpperCase() é um método da string que é usado para converter uma string para maiúscula, ou seja, ele é usado para manipular os dados de uma string, e o resultado do método é retornado pela função e pode ser usado em outras partes do código, como por exemplo, para imprimir a string em maiúscula usando console.log(result.toUpperCase());

const greet2 =() =>'hello';

let result1 = greet2();
console.log(result1.toUpperCase());


//função callback e for each

const minhafuncao = (callbackfunc) => {

    let valor = 30;
    callbackfunc(valor); //chama a função de callback, ou seja, a função que é passada como argumento para a função minhafuncao, e passa o valor como argumento para a função de callback, ou seja, quando a função minhafuncao é chamada com a função de callback como argumento, o valor 30 é passado para a função de callback e é usado como o valor do parametro valor dentro da função de callback, e o resultado do código dentro da função de callback é executado, ou seja, o valor 30 é impresso no console usando console.log(valor);
    
}

minhafuncao(function(valor){console.log(valor);}); //chama a função minhafuncao com a função de callback como argumento, ou seja, a função de callback é passada como argumento para a função minhafuncao, e quando a função minhafuncao é executada, o valor 30 é passado para a função de callback e é usado como o valor do parametro valor dentro da função de callback, e o resultado do código dentro da função de callback é executado, ou seja, o valor 30 é impresso no console usando console.log(valor);

//função de callback é uma função que é passada como argumento para outra função, e é executada dentro da função que a recebe como argumento, ou seja, ela é usada para criar funções que são executadas em resposta a eventos, ou seja, quando um evento ocorre, a função de callback é executada, como por exemplo, quando um botão é clicado, a função de callback é executada para manipular o evento de clique, ou seja, para executar um código em resposta ao clique do botão.
/*
function callback(resultado) {
     
    console.log('o resultado é:' + resultado);}

function teste(n1,n2, callback){
 let resultado = n1 + n2;
 callback(resultado);



}

teste(10,20, callback);

const callback2 = (valor1, valor2) => {
 switch(true){
    case (valor1 > valor2):
        console.log('valor 1 é maior que valor2');
        break;

    case (valor1 < valor2):
        console.log('valor 1 é menor que valor2');
        break;

    default:
        console.log('valor 1 é igual a valor2');}
}

const teste2 = (valor1, valor2, callback2) => {

    callback2(valor1, valor2);

    console.log('testando valores:' + valor1, valor2, callback2);


}

console.log(teste2(10,20, callback2)); */

// 1. Função callback, cria uma base lógica para processar o status do pedido
const processaStatus = (status) => {
  switch(status){
    case 'pendente':
      return 'Pedido aguardando pagamento';
    case 'aprovado':
      return 'Pagamento aprovado, preparando envio';
    case 'enviado':
      return 'Pedido a caminho!';
    case 'entregue':
      return 'Pedido entregue com sucesso!';
    default:
      return 'Status desconhecido';
  }
}

// 2. A função principal, que verifica o pedido, organiza oque ela faz e depois chama a função de callback para processar o status do pedido, ou seja, a função verificaPedido é a função principal que organiza o que ela faz, ou seja, ela verifica o pedido e depois chama a função de callback para processar o status do pedido, ou seja, ela é usada para criar uma estrutura lógica para o código, onde a função principal organiza o que ela faz e depois chama a função de callback para executar um código específico em resposta a um evento, como por exemplo, quando um pedido é verificado, a função de callback é executada para processar o status do pedido e imprimir uma mensagem no console com base no status do pedido.
const verificaPedido = (numeroPedido, status, callback) => {
  console.log('Verificando pedido #' + numeroPedido);
  callback(status); // aqui ela "chama de volta" a processaStatus
}

// chamando a função principal com as informações e mostra no console o resultado
verificaPedido(1234, 'entregue', processaStatus);


//callbacks e foreach

let pessoas = ['Alice', 'Bob', 'Charlie', 'Diana'];//array de pessoas, ou seja, uma lista de nomes, onde cada nome é um elemento do array, e o array é usado para armazenar os dados de forma organizada, ou seja, para criar uma estrutura de dados que pode ser manipulada e acessada de forma eficiente, como por exemplo, para imprimir a lista de pessoas usando console.log(pessoas);

const logPessoa = (pessoa, index) => {
    console.log(`${index} - hello ${pessoa}!`); //função de callback para o método forEach, ou seja, a função logPessoa é passada como argumento para o método forEach, e quando o método forEach é executado, ele chama a função logPessoa para cada elemento do array pessoas, passando o elemento atual e o índice como argumentos para a função logPessoa, e o resultado do código dentro da função logPessoa é executado, ou seja, a mensagem "0 - hello Alice!", "1 - hello Bob!", "2 - hello Charlie!", "3 - hello Diana!" é impressa no console usando console.log(`${index} - hello ${pessoa}!`);
};

pessoas.forEach(logPessoa);

const bomdia = (teste1, teste2, statusMensagem) =>{console.log(`Bom dia ${teste1} e ${teste2}. ${statusMensagem}`)};

bomdia('pedro','clara', processaStatus('entregue'));

//Referencia para ul

const ul = document.querySelector('.pessoasHTML'); //ul = unordered list

const pessoasHTML = ['pedro','clara', 'vincenzo', 'julia', 'renata'];

let html = ``;

pessoasHTML.forEach(pessoahtml =>  html += `<li style="color: red">${pessoahtml}</li>`)

console.log(html);
ul.innerHTML = html;