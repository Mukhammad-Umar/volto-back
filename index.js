var express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

var app = express()

var cors = require('cors')

app.use(cors())

app.use('/', routes)

app.use('/images', express.static('images')) // to open image on web through url

const getProducts = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://yoqubjonov:GR3oyT0ZUu2tPto8@volto.xo2a7kc.mongodb.net/voltodb?retryWrites=true&w=majority'
    )
    app.listen(5000, () => console.log('listen on port 5000'))
  } catch (err) {
    console.log(err)
  }
}

getProducts()
