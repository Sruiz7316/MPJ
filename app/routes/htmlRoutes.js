const express = require('express')
const path = require('path')

const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public', 'login.html'))
// })

// app.get('/dashboard', function (req, res) {
//   res.sendFile(path.join(__dirname, '../../public/dashboard.html'))
//   // catch all route that takes you to dashboard//
// })

//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require('../../config/middleware/isAuthenticated.js')
//
app.get('/', function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members')
  }
  res.sendFile(path.join(__dirname, '../../public/login.html'))
})

app.get('/login', function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members')
  }
  res.sendFile(path.join(__dirname, '../../public/login.html'))
})

app.post('/api/login', function(req, res) {
  res.json(req.body);
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be
// redirected to the signup page
app.get('/members', isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/dashboard.html'))
})

module.exports = app
