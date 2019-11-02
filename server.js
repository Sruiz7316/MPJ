const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const path = require('path')
// const routes = require('./app/routes/htmlRoutes')
const db = require('./models')
const passport = require('./config/passport.js')
const Sequelize = require('sequelize')

// configure dotenv file
// dotenv.config()

// console.log(process.env)

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

// app.use('/', routes)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
// For Passport
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

const apiRoute = require('./app/routes/api-routes.js')
const htmlRoutes = require('./app/routes/htmlRoutes.js')

app.use(apiRoute)
app.use(htmlRoutes)
// Models

app.listen(PORT, function (err) {
  if (!err) console.log('Site is live')
  else console.log(err)
})

function postBinaryImage (imageData) {
  console.log('Posting image...', imageData)
  return $.ajax({
    url:
      'https://myplantjournal.cognitiveservices.azure.com/customvision/v3.0/Prediction/a06d1a56-f77c-4caf-ae99-fbecf3f9fce2/classify/iterations/carnation%20and%20roses/image',
    type: 'POST',
    headers: {
      'Prediction-Key': process.env.API_KEY
    },
    contentType: 'application/octet-stream',
    data: imageData,
    processData: false
  })
}

function getKeys () {}

function postWebUrlImage (imageUrl) {
  console.log('Posting image url...', imageUrl)
  console.warn('this function is not fully implemented')
}
