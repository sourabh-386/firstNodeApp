const fs = require('fs')

const html_data = fs.readFileSync('index.html', 'utf-8')

const json_data = JSON.parse(fs.readFileSync('user.json', 'utf-8'))

const product = json_data.users
//create 
exports.creat = (req, res) => {
    console.log(req.body)
    product.push(req.body)
    res.json({ type: 'post' })
}

//read all
exports.readAll = (req, res) => {
    res.json(product)
}

//read one
exports.readOne = (req, res) => {
    console.log(req.params.id)
    let id = +req.params.id

    const require_product = product.find(p => p.id == id)

    const req_product = html_data.replace('**title**', require_product.title)
        .replace('description', require_product.description)
        .replace('price', require_product.price)
        .replace('https://i.dummyjson.com/data/products/1/1.jpg', require_product.thumbnail)
    res.send(req_product)
}

//put
exports.put = (req, res) => {
    const id = +req.params.id
    const product_i = product.findIndex(p => p.id === id)
    product.splice(product_i, 1, { ...req.body, id: id })
    res.send({ type: 'PUT' })
}
//patch
exports.patch = (req, res) => {
    let id = +req.params.id
    let product_i = product.findIndex(p => p.id == id)
    const old_product = product.find(p => p.id == id)
    product.splice(product_i, 1, { ...old_product, ...req.body })
    res.send({ type: 'PUT' })
}

//delete
exports.delet = (req, res) => {
    let id = +req.params.id
    let product_i = product.findIndex(p => p.id == id)
    product.splice(product_i, 1)
    res.send({ type: 'DELETE' })
}