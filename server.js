const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
// const routes = require('./app/routes/htmlRoutes')
const db = require('./models')
const passport = require('./config/passport.js')
const Sequelize = require('sequelize')

// configure dotenv file
dotenv.config()

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
