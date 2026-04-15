const express= require('express');

//App express

const app = express();

//registrando engine de view

//Morgan

const morgan = require('morgan');

app.set('view engine', 'ejs');

//ouvir por pedidos

app.listen(3000);


// app.use((req,res,next) =>{
//     console.log('novo pedido feito:');
//     console.log('host:',req.hostname);
//     console.log('caminho:', req.path);
//     console.log('method:', req.method);
//     next();
// });
//middleware
app.use(express.static('public'));
app.use(morgan('dev'));

app.use((req,res,next) =>{
    console.log('no próximo middleware:');
    next();
});

app.get('/',(req,res) =>{
    const blogs =[
        {titulo:'Claralandia', snippet:'a landia da clara'},
        {titulo:'Pedrolandia', snippet:'a landia do pedro'},
        {titulo:'Bibolandia', snippet:'a landia do bibo'},
    ];    
    //res.send('<p>Pagina inicial </p>');
    //res.sendFile('./views/index.html', {root:__dirname});
    res.render('index',{ titulo:'Casa', blogs});
});

app.get('/sobre',(req,res) =>{
    //res.send('<p>Pagina algo </p>');
    //res.sendFile('./views/sobre.html', {root:__dirname});
    res.render('sobre', {titulo:'sobre'});
});

app.get('/blogs/create',(req,res) =>{
    res.render('create',{titulo:'criar'});
});

//404 (efeito "cascata", o código vai comparar o "pedido" ao endereço nas tentativas de cima, achando, encerra e demonstra a página, se não encontrar nenhum vai ativar esse, que está "ouvindo" para qualquer pedido que for nele, onde vai devolvr o erro 404)
app.use((req, res) =>{
    res.status(404).render('404',{titulo:'ERRO'});/* sendFile('./views/404.html', {root:__dirname}); */
})



//redirecionamento
// app.get('/sobre-nos',(req,res) =>{
//     //res.send('<p>Pagina algo </p>');
//     res.redirect('/sobre');
// });
