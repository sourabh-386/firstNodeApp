

// const fs = require('fs')
// const json_data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
// const product = json_data.products


const model = require('./schema')

const Product = model.p_Schema


exports.read = (req, res) => {

    Product.find()
        .then(data => res.json(data))
        .catch(error => res.send({ type: error }))

}

exports.readOne = (req, res) => {
    let id = req.params.id
    Product.findOne({ _id: id })
        .then(data => res.json(data))
        .catch(error => {
            console.log(error)
            res.send({ type: error })
        })

}

exports.push = (req, res) => {
    const item = req.body
    const product = new Product(req.body)
    product.save()
        .then(res => res.json(res))
        .catch(error => res.send({ type: error }))
}

exports.put = (req, res) => {

    const id = +req.params.id
    Product.findOneAndReplace({ id: id }, { ...req.body, id: id }, { new: true })
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(error => res.send(error))

}
exports.patch = (req, res) => {
    const id = +req.params.id
    Product.findOneAndUpdate({ id: id }, req.body, { new: true })
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(error => res.send(error))
}

exports.delet = (req, res) => {
    const id = req.params.id

    Product.findOneAndDelete({ _id: id }, { new: true })
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(error => res.send(error))
}