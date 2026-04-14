const http = require('http');
const fs = require('fs').promises;
const _ = require('lodash');

const server = http.createServer(async(req, res) => {//adicionei um async
    console.log(`${req.method} pedido para: ${req.url} `);

    //lodash(testando pacotes)

    const num = _.random(0, 20);
    console.log(num);

    res.setHeader('Content-Type', 'text/html');

    let caminho = './Views/';
    
    switch(req.url){
        case'/':
            caminho += 'index.html';
            res.statusCode = 200;
            break;

        case'/sobre':
            caminho += 'sobre.html';
            res.statusCode = 200;//tudo ok
            break;

        case'/sobre-nos':
            res.statusCode = 301;//código relacionado a recurso procurado foi realocado
            res.setHeader('Location','/sobre');//redirecionando para sobre
            return res.end();//Return no lugar de só res.end(); e break; pois vai tentar ler novamente no res.end(data); dentro do try, e o código continuaria
                    
        default:
            caminho += '404.html';
            res.statusCode = 404;//página não encontrada
            break;
    }
//método mais atual
    try{
        const data= await fs.readFile(caminho);//Após decidido o caminho o código "procura" o .html certo na pasta em questão e sem encontrar retorna o erro de código 500
        res.end(data);
    } catch(err){
        console.error("Erro na leitura:",err);

        res.writeHead(500,{'Content-Type':'text-html'})
        res.end('<h1>ERRO INTERNO DE SERVIDOR</h1>');
    }

// //método antigo
//     fs.readFile(caminho, (err,data) =>{
//         if(err){
//             console.log(err)
//              res.end();
//         }else{
//             res.write(data);
//              res.end();
//         }
//     })
});



server.listen(3000, 'localhost', () =>{
    console.log('ouvindo por pedidos no port 3000');
});