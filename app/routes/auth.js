// Im not sure if this is right////

// var authController = require('../controllers/authcontroller.js')

// module.exports = function (app, passport) {
//   app.get('/', authController.signup)

//   app.get('/', authController.signin)

//   app.post(
//     '/',
//     passport.authenticate('local-signup', {
//       successRedirect: '/dashboard',

//       failureRedirect: '/'
//     })
//   )

//   app.get('/dashboard', isLoggedIn, authController.dashboard)

//   app.get('/', authController.logout)

//   app.post(
//     '/',
//     passport.authenticate('local-signin', {
//       successRedirect: '/dashboard',

//       failureRedirect: '/'
//     })
//   )

//   function isLoggedIn (req, res, next) {
//     if (req.isAuthenticated()) return next()

//     res.redirect('/')
//   }
// }

// -----------------------------Initiating Modals-------------------------------//

// $(document).ready(function () {



// $('#modal2').modal()
// })
