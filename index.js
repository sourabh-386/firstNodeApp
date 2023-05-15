const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path') //create path 

const server = express()

require('dotenv').config() //for reading env files




const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${encodedPassword}@cluster0.escxue8.mongodb.net/ecommerse?retryWrites=true&w=majority`);
    console.log('connected the server')
}


server.use(cors()) //conect to diffrent servers


server.use(express.json()) //middleware for reading body

server.use(express.static(path.resolve(__dirname,process.env.BUILD_DIR)))

const { p_route } = require('./controller2/route')
server.use('/data', p_route) //middelware for node routs


// we cant use routes of react dieractly so we use this and __dirname+ give adsolute path of directry
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})



// server.use(express.static(path.resolve(__dirname, process.env.BUILD_DIR))) //this give static path







server.listen(process.env.PORT, () => {
    console.log('server is runnng')
})