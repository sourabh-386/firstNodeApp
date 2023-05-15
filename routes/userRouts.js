const express = require('express');

const user_router=express.Router() //this is router for product generall change path

const { readAll, readOne, creat, put, patch, delet } = require('../controller/user')

user_router
    .get('/', readAll)
    .get('/:id', readOne)
    .post('', creat)
    .put('/:id', put)
    .patch('/:id', patch)
    .delete('/:id', delet)


    exports.user_router=user_router