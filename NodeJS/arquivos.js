const fs = require('fs');//declara e utiliza o "filesystem"

//lendo arquivos ASSINCRONO

fs.readFile('./testeparaleitura.txt', (err, data) => {//filesystem, readfile para direcionar o arquivo, "(err, data)" para ficar "de olho" em possiveis erros e data para acessar os dados
    if(err){console.log(err);}//função if para se tiver um erro dizer o erro
    console.log(data.toString());//demonstrar os dados como string usando o .toString()
}); 


//escrevendo/criando arquivos

 fs.writeFile('./testeparaleitura.txt','Teste trocando conteudo', (err) => {//fs.writeFile('./endereço do arquivo','texto desejado para inserir', (callback de erro pq é sempre melhor previnir doque remediar))
     if(err){console.log(err);}
     console.log('arquivo foi editado');

 });



if(fs.existsSync('./criandoumarquivonovo.txt')){//conferindo se o arquivo em questão existe, existindo ele é apagado e se não existir ele é criado
    fs.unlink('./criandoumarquivonovo.txt', (err)=> { //unlink = apagar arquivo
    if(err){console.log(err);}   
    console.log('arquivo deletado');});


}else{ fs.writeFile('./criandoumarquivonovo.txt','Teste criando um arquivo novo', (err) => {//fs.writeFile('./endereço do arquivo','texto desejado para inserir', (callback de erro pq é sempre melhor previnir doque remediar))
     if(err){console.log(err);}
    console.log('arquivo foi criado');

 });};


 //pastas
if (!fs.existsSync('./blogs')){
    
    fs.mkdir('./blogs', (err) =>{
    
    if(err){console.log(err);}
    console.log('pasta criada')

})}else{fs.rmdir('./blogs', (err) =>{

    if(err){console.log(err);}
    console.log('pasta deletada');
})};
 