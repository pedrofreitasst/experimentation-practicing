//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');
const blog_index = async (req,res) =>{
    try{
        const result = await Blog.find().sort({createdAt:-1});
        res.render('index', {titulo: 'Todos os Blogs', blogs: result})
    } catch (erro){
        console.log(erro);
        res.status(500).json({mensagem:'Erro ao recuperar Blogs'});
    }
}

    const blog_detalhes = async(req,res) =>{
    try{
        const id = req.params.id;
        const result = await Blog.findById(id);
        res.render('detalhes', {blog: result, titulo:'id'});
    }catch (erro){
        console.log(erro);
        res.status(500).json({mensagem:'Erro ao recuperar Blog'});
    }}

    const blog_criar = async(req,res) =>{
         const blog = new Blog(req.body);
            blog.save()
                .then((result) =>{
                    res.redirect('/blogs');
                })
                .catch((err) =>{console.log(err);})
    }

    const blog_deletar = async(req,res) =>{
        try{
        const id = req.params.id;
        const result = await Blog.findByIdAndDelete(id);
        res.json({redirect: '/blogs/'});
        //res.render('detalhes', {blog: result, titulo:'id'});
        }catch (erro){
        console.log(erro);
        res.status(500).json({mensagem:'Erro ao recuperar Blog'});
    }
        
    }

module.exports = {
    blog_index,
    blog_detalhes,
    blog_criar,
    blog_deletar
}