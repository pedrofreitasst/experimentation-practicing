const express= require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
//App express
const app = express();
//Conexão para MongoDB



const uri = "mongodb://USUARIO:SENHA@ac-rxf0fio-shard-00-00.joqu1a1.mongodb.net:27017,ac-rxf0fio-shard-00-01.joqu1a1.mongodb.net:27017,ac-rxf0fio-shard-00-02.joqu1a1.mongodb.net:27017/?ssl=true&replicaSet=atlas-o9mwz2-shard-0&authSource=admin&appName=pedrofreitasst-cluster";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, clientOptions)
.then(() =>{
    console.log('conectado a MongoDB');
    app.listen(3000);
})
.catch((err) => console.log(err));




// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);





// const dbMongo = 'mongodb+srv://pedrofreitasstdb:huaauh2121@pedrofreitasst-cluster.joqu1a1.mongodb.net/?appName=pedrofreitasst-cluster';

// mongoose.connect(dbMongo)
//     .then((result) => console.log('connected to db'))
//     .catch((err) => console.log(err));
//Morgan
const morgan = require('morgan');
//registrando engine de view
app.set('view engine', 'ejs');


//ouvir por pedidosimport mongodb from 'mongodb';

// app.listen(3000);


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
//testando rotas

// app.get('/addblog',async (req,res) =>{
//     try{const blogue = new Blog({
//         titulo: 'novo blog',
//         snippet: 'sobre o novo blog',
//         corpo: 'mais sobre o novo blog'

//     });
//         await blogue.save();
//         res.json({mensgem: 'Blog Salvo com Sucesso!'});
// } catch (erro) {
//     console.log(erro);
//     res.status(500).json({mensagem: 'Erro ao salvar Blog'});
// }
// });

// app.get('/todosblogs', async(req,res) =>{
//     try{
//         const result = await Blog.find();
//         res.json(result);

//     } catch (erro) {
//     console.log(erro);
//     res.status(500).json({mensagem: 'Erro ao recuperar Blogs'});
// }})

// app.get('/umblog', async(req,res) =>{
//     try{
//         const result = await Blog.findById('69e148245332e25a061e9a5f');
//         res.json(result);
//     } catch (erro){
//         console.log(erro);
//         res.status(500).json({mensagem:'Erro ao recuperar Blog'});
//     }
// })

//

app.get('/',(req,res) =>{
    res.redirect('/blogs');
    
    // const blogs =[
    //     {titulo:'Claralandia', snippet:'a landia da clara'},
    //     {titulo:'Pedrolandia', snippet:'a landia do pedro'},
    //     {titulo:'Bibolandia', snippet:'a landia do bibo'},
    // ];    
    // //res.send('<p>Pagina inicial </p>');
    // //res.sendFile('./views/index.html', {root:__dirname});
    // res.render('index',{ titulo:'Casa', blogs});
});

app.get('/sobre',(req,res) =>{
    //res.send('<p>Pagina algo </p>');
    //res.sendFile('./views/sobre.html', {root:__dirname});
    res.render('sobre', {titulo:'sobre'});
});

app.get('/blogs/create',(req,res) =>{
    res.render('create',{titulo:'criar'});
});

//rotas de blogs

app.get('/blogs', async (req,res) => {
    try{
        const result = await Blog.find().sort({createdAt:-1});
        res.render('index', {titulo: 'Todos os Blogs', blogs: result})
    } catch (erro){
        console.log(erro);
        res.status(500).json({mensagem:'Erro ao recuperar Blogs'});
    }

})



//404 (efeito "cascata", o código vai comparar o "pedido" ao endereço nas tentativas de cima, achando, encerra e demonstra a página, se não encontrar nenhum vai ativar esse, que está "ouvindo" para qualquer pedido que for nele, onde vai devolvr o erro 404)
app.use((req, res) =>{
    res.status(404).render('404',{titulo:'ERRO'});/* sendFile('./views/404.html', {root:__dirname}); */
})



//redirecionamento
// app.get('/sobre-nos',(req,res) =>{
//     //res.send('<p>Pagina algo </p>');
//     res.redirect('/sobre');
// });
