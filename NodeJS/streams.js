//DESCOBRI QUE AS AULAS QUE PRECISO ME ATUALIZAR E ESTAVA USANDO CÓDIGOS E CONCEITOS DE 5 ANOS ATRAS
//irei atualizar enquanto vou aprendendo, códigos "antiquados" provavelmente tem origem de aulas assistidas.

//começando por criar um arquivo dentro da pasta "blogs" que criei para ter oque trabalhar
// const fs = require('fs');


// if(fs.existsSync('./blogs/Blog1.txt')){
//     console.log('arquivo já existe');
// }else{fs.writeFile('./blogs/Blog1.txt','insira um texto grande para steams', (err) => {//fs.writeFile('./endereço do arquivo','texto desejado para inserir', (callback de erro pq é sempre melhor previnir doque remediar))
//      if(err){console.log(err.message);}
//      console.log('arquivo criado');
//  });
//}

//Tentando criar um loop para prencheer o arquivo até certo ponto e parando

// const fs = require('fs').promises;//chama o uso do filesystem e de promises
// const caminho = './blogs/blog1.txt';//diz o caminho do arquivo modificado
// const tamMax = 1* 1024 *1024; //dita o tamanho máximo (1mb parece o suficiente)
// const chunk = 'Frase Teste Escrita em Loop.\n'//diz oque eu quero inserido no arquivo
// const chunkTam = Buffer.byteLength(chunk,'utf8');//"tracka" o tamanho do chunk em utf8

// async function encheArquivo(){//cria a função encheArquivo
    
//     await fs.mkdir('./blogs', { recursive: true});//cria a pasta blogs e "força" se ela não tiver sem precisar do método que estava usando antes de conferir se existe com ifs e elses  
//     await fs.writeFile(caminho,'');//cria o arquivo ou talvez sobrescreva ele se já existir

//     let escrito = 0;//cria a variavel escrito para "trackar" o valor escrito no arquivo começando no 0

//     while(escrito<tamMax) {//enquanto o valor escrito for menor que o valor máximo ele continua fazendo o abaixo
//         await fs.appendFile(caminho, chunk);//escreve adicionando conteudo pelo appendFile com o caminho do arquivo e o chunk escrito
//         escrito +=chunkTam;//adiciona o tamanho do chunkTam na variavel escrito para manter em mente o progresso no tamanho do arquivo
//     }
        
// }

// encheArquivo().catch(console.error);//se acontecer algum err na função demonstra no console

//tentando fazer por stream porque percebi que estava fazednoo mais por writefile doque or streams por si próprio

const fs = require('fs');
// const caminho = './blogs/blog2.txt';
// const TamanhoMax = 1* 1024*1024;
// const textoDoLoop = 'Frase em Loop\n';
// const tamanhoChunk = Buffer.byteLength(textoDoLoop,'utf-8');

// async function preencheArquivo(){
//     await fs.promises.mkdir('./blogs', {recursive:true});

//     const stream = fs.createWriteStream(caminho);
//     let escrito = 0;

//     while (escrito<TamanhoMax){
//         if(!stream.write(textoDoLoop)){
//             await new Promise(resolve =>stream.once('drain',resolve));
            
//         }
//         escrito =+ tamanhoChunk;
//     }
//     console.log('Arquivo criado');
//     stream.end();
// }


// preencheArquivo().catch(console.error);

//piping

const readStream = fs.createReadStream('./blogs/blog1.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('./blogs/blog3.txt');
readStream.on('data', (chunk) =>{
    
    console.log('NovoChunk');    
    console.log(chunk);

});

readStream.pipe(writeStream)
