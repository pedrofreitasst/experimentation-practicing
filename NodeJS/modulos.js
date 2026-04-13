const xyz = require('./pessoas');//invoca o arquivo pedido "./"significa pedir algo que está no mesmo endereço/caminho que vESTEv arquivo está

console.log(xyz/*.pessoas ou .string*/);//demonstra um objeto em branco/vazio se não tiver o module.exports, tendo ele botando a constante indicada no require +.oObjetoDentroDoModuleExports você consegue usar um especifico, se não, você usa todos 

//outra forma

const {pessoas, string}=require('./pessoas');

console.log(pessoas,string);//além de ser menor conseguiu o resultado originalmente esperado