const express = require('express')
const app = express()
const db = require('../../models')
const passport = require('../../config/passport.js')
const axios = require('axios')
app.post('/api/login', passport.authenticate('local'), function (req, res) {
  return res.status(200).json('Login sucessful')
})

app.post('/api/upload-image', function (req, res) {
  // res.json({
  //     api_key: process.env.API_KEY
  // })
  console.log('data?', req.body)
  axios
    .post(
      'https://myplantjournal.cognitiveservices.azure.com/customvision/v3.0/Prediction/a06d1a56-f77c-4caf-ae99-fbecf3f9fce2/classify/iterations/carnation%20and%20roses/image',
      req.body,
      {
        headers: {
          'Prediction-Key': process.env.API_KEY,
          contentType: 'application/octet-stream'
        }
      }
    )
    .then(response => {
      console.log('response', response.data)
      res.send(response.data)
    })
    .catch(error => {
      console.error('error', error)
      res.status(500).send(error.message)
    })
})

app.post('/api/signup', function (req, res) {
  console.log(req.body)
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function () {
      res.status(201).json('Signup successful')
    })
    .catch(function (err) {
      console.log('error occured', err)
      res.json(err)
    })
})

app.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

module.exports = app
