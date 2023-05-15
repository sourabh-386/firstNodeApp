const express=require('express')
const {read,readOne,push,patch,put,delet}=require('./controller')
const p_route=express.Router();  // middleware for routing

p_route
    .get('', read)
    .get('/:id', readOne)
    .post('', push)
    .put('/:id', put)
    .patch('/:id', patch)
    .delete('/:id', delet)

    exports.p_route=p_route