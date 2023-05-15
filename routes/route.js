const express = require('express');

const products_router=express.Router() //this is router for product generall change path

const { readAll, readOne, creat, put, patch, delet } = require('../controller/product')

products_router
    .get('/', readAll)
    .get('/:id', readOne)
    .post('/', creat)
    .put('/:id', put)
    .patch('/:id', patch)
    .delete('/:id', delet)


    exports.products_router=products_router