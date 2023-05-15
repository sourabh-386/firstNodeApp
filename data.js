// const sum = require('./2nd')

// import { sum } from './2nd.js'
// console.log(sum(3,7))





// import fs, { readFileSync } from 'fs'

// readFileSync is sycronus  but readfilr is asyncronus 

// let data= fs.readFileSync('demo.txt','utf-8')
// console.log(data)

// fs.readFile('demo.txt','utf-8', (error,data) => {
//     console.log(data)
//     console.log(error)
// })














// first web server  with pure node
// const { request } = require('http')

// const fs = require('fs')

// const html_data = fs.readFileSync('index.html', 'utf-8')

// const json_data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

// const product = json_data.products




// const http = require('http')


// const server = http.createServer((req, res) => {

//     console.log(req.url)

//     console.log('start')

//     res.setHeader('server', 'working')


// if (req.url.startsWith('/product')) {

//        if(req.url.split('/')[2]){
//         const id = req.url.split('/')[2]
//         const require_product = product.find(p => p.id == id)
//         console.log(require_product)
//         const change = html_data.replace('title', require_product.title)
//             .replace('description', require_product.description)
//             .replace('price', require_product.price)
//             .replace('https://i.dummyjson.com/data/products/1/1.jpg',require_product.thumbnail)
//         res.end(change)
//         return;
//        }else{
//         res.end('nothing')
//         return;
//        }
//     }

//     switch (req.url) {
//         case '/':

//             res.setHeader('Content-Type', "text/html")
//             res.end(html_data)
//             break;

//         case '/api':

//             res.setHeader('Content-Type', "application/json")
//             res.end(JSON.stringify(json_data))
//             break;

//         default:
//             res.writeHead(404, 'not-found')
//             res.end('not found');

//     }

// })

// server.listen(8000)











// let json_d = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

// let html_d = fs.readFileSync('index.html', 'utf-8')
// let items = json_d.products

// const http = require('http');



// const server = http.createServer((req, res) => {

//     console.log('server is working')

//     if (req.url.startsWith('/item')) {

//         const item_url = req.url.split('/')[2]

//         const selected_item = items.find(val => item_url == val.id)

//         res.setHeader('Content-Type', 'text/html')
//         const changed_data = html_d.replace('title', selected_item.title)
//             .replace('price', selected_item.price)
//             .replace('discription', selected_item.discription)
//             .replace('https://i.dummyjson.com/data/products/1/1.jpg', selected_item.thumbnail)


//         res.end(changed_data)
//         return;
//     }




//     switch (req.url) {

//         case '/':
//             res.setHeader('Content-Type', 'text/html')
//             res.end(html_d)
//             break;

//         case '/data':
//             res.setHeader('Content-Type', 'application/json')
//             res.end(JSON.stringify(json_d))
//             break;

//         default:
//             console.log(req.url)
//             res.setHeader('Content-Type', 'text/text')
//             res.end(req.url)
//             break;
// }






// })










// now we create same server using express 

// const express = require('express')

// const server = express();

// server.get('/', (req, res) => {

// res.send('<h1>Hello World</h1>')
// res.sendFile('C:/Users/adity/Desktop/learning nodejs/index.html')
// res.json(product)
// res.sendStatus(404)
// })



// this is middleware logger midelware
// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
//     next()
// })




//this midelware read body inbuilt because express not excess body directly"?""
// server.use(express.json());



//medailware for utorization
// const auth = (req, res, next) => {
// console.log(req.query)

// if (req.body.name == 'sk') {
//     next()
// }
// else {
//     res.sendStatus(401)

// }

// }

// server.use(auth)




// server.get('/', (req, res) => {
//     res.send({ type: 'GET' })
// })

// server.put('/', (req, res) => {
//     res.send({ type: 'PUT' })
// })

// server.delete('/', (req, res) => {
//     res.send({ type: 'DELETE' })
// })

// server.post('/',auth, (req, res) => {
//     res.send({ type: 'POST' })
// })




// server.listen(8000, () => {
//     console.log('server is working')
// });








// c u r d operation


// const express = require('express');
// const server = express();

// server.use(express.json())

// //read api
// server.get('/products', (req, res) => {
//     res.json(product)
// })

// //read one elelment
// server.get('/products/:id', (req, res) => {
//     console.log(req.params.id)
//     let id = +req.params.id

//     const require_product = product.find(p => p.id == id)

//     const req_product = html_data.replace('**title**', require_product.title)
//         .replace('description', require_product.description)
//         .replace('price', require_product.price)
//         .replace('https://i.dummyjson.com/data/products/1/1.jpg', require_product.thumbnail)
//     res.send(req_product)
// })

// //create api
// server.post('/products', (req, res) => {
//     console.log(req.body)
//     product.push(req.body)
//     res.json({ type: 'post' })
// })


// //update api this will over write all
// server.put('/products/:id', (req, res) => {
//     const id = +req.params.id
//     const product_i = product.findIndex(p => p.id === id)
//     product.splice(product_i, 1, { ...req.body, id: id })
//     res.send({ type: 'PUT' })
// })


// //update api by patch this will change  given date and also tajke preview value which are not given
// server.patch('/products/:id', (req, res) => {
//     let id = +req.params.id
//     let product_i = product.findIndex(p => p.id == id)
//     const old_product = product.find(p => p.id == id)
//     product.splice(product_i, 1, { ...old_product, ...req.body })
//     res.send({ type: 'PUT' })
// })



// //delete api
// server.delete('/products/:id', (req, res) => {
//     let id = +req.params.id
//     let product_i = product.findIndex(p => p.id == id)
//     product.splice(product_i, 1)
//     res.send({ type: 'DELETE' })
// })


// server.listen(8000, () => {
//     console.log('server is working')
// })












// doind crud operatins in more readable Wey  usin MVC model view controller
const express = require('express');
require('dotenv').config() //for reading env files
const mongoose = require('mongoose');





const server = express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerse');
    console.log('connected')
}

// //schema or configration
// const productSchema = new Schema({
//     title: String,
//     description: String,
//     price: Number,
//     discountPercentage: Number,
//     rating: Number,
//     brand: String,
//     category: String,
//     thumbnail: String,
//     images: [String]
// });


// //model for schema we perform c u r d operation on model
// const product = mongoose.model('product', productSchema);







const { products_router } = require('./routes/route')
const { user_router } = require('./routes/userRouts')

// console.log(process.env.DB_PASSWORD)


server.use('/products', products_router) // this is middelware for product route

server.use('/user', user_router) // this is middelware for user route

server.use(express.json()) //middleware for reading body


server.listen(process.env.PORT, () => {
    console.log('server is working at port ', process.env.PORT)
})










//mongo db
