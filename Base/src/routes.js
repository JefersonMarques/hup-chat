const express = require('express')
const routes = express.Router()
const basePath = __dirname + "/views"

routes.get('/', (request, response)=>{
    response.render(basePath + "/index.ejs")
})


module.exports = routes;