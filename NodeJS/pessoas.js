const pessoas = ['pedro', 'clara','vincenzo'];

console.log(pessoas);

console.log('só mais um teste para ver se realmente o require "puxa o arquivo" que pede e executa ele no console');//sim

//module.exports =(`'então o require "puxa" o arquivo porém para exportar dados de dentro do aquivo precisa do module.exports, aí então ele pode direcionar o valor a alguma variavel/constante, apenas o exportado "vai pra jogo", assumindo isso se eu colocar ", pessoas" vai também mandar o array?', ${pessoas}`) ;//exportou como um texto simples e não o array, 

module.exports ={
    pessoas: pessoas, //sendo o mesmo nome, eu poderia ter apénas usado "pessoas"
    string: 'acho que assim vai exportar os dois, um sendo o array mesmo e o outro sendo texto'//eeeeh melhor que o primeiro
};