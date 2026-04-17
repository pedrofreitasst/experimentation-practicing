const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({//objeto blogSchema com caracteristicas necessarias e timestamp ligado
    titulo: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    corpo: {
        type: String,
        required: true
    },

}, {timestamps: true});

const Blog = mongoose.model('Blog',blogSchema)//ele procura o nome 'blog', pluraliza sózinho e procura uma collection chamada blogs

module.exports = Blog;
