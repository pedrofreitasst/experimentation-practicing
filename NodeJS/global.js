//console.log(global); //demonstra os métodos disponíveis
//estrutura base nesses casos de funções assim parecem ser nomeDoObjeto.função(() =>{Bloco de código},tempo);
setTimeout(() =>{ 
    
    console.log('Dentro do timeout'); //"global" não é necessário porquê assim como window é um "objeto" global
    clearInterval(int);//termina o intervalo citado dentro do '()', nesse caso int

}, 3000);

const int = setInterval(() =>{//cria a constante/e liga a ela a função setInteval especifica|| e quando estamos ligando uma função a uma constante a estrutura pós função se mantem porém começa com const int = padrão
    
    console.log('1 segundo passou no intervalo');//demonstra essa mensagem a cada vez que o periodo de tempo abaixo passa



},1000); //setInteval roda o bloco de código dentro A CADA valor do intervao(nesse caso 1 segundo)

console.log(__dirname);//diz o caminho para a pasta atual
console.log(__filename);//caminho da pasta+arquivo atual

