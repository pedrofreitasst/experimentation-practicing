const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();
const blogController = require('../Controladores/blogController');


router.get('/blogs', blogController.blog_index);

router.get('/blogs/:id', blogController.blog_detalhes);

router.post('/blogs', blogController.blog_criar);

router.delete('/blogs/:id', blogController.blog_deletar);

module.exports = router;