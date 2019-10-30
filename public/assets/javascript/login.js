// Initializing Login Modals//
const apiBaseUrl = 'http://localhost:3000'
$(document).ready(() => {
  // login
  document
    .getElementById('signin-modal-button')
    .addEventListener('click', e => {
      const email = $('#email-signin').val()
      const password = $('#password-signin').val()
      console.log('emmmm ====== ', email, password)
      axios
        .post(apiBaseUrl + '/api/login', { email, password })
        .then(cred => {
          console.log('signin successful', cred)
          // login successful, redirect to members page
           location.href = '/members'
        })
        .catch(e => {
          $('#login-error').html('<p>Login Failed</p>')
          console.log('err signing up', e)
        })
    })

  // Signup
  document
    .getElementById('button-modal-signup')
    .addEventListener('click', e => {
      e.preventDefault()
      const email = $('#email-modal-signup').val()
      const password = $('#password-modal-signup').val()
      console.log('signup ====== ', email, password)
      axios
        .post(apiBaseUrl + '/api/signup', { email, password })
        .then(response => {
          // Sigup successful, redirect user to the login page to login
          console.log('signup successful', response)
          location.href = '/login'
        })
        .catch(e => {
          // Signup Failed, show an error message
          $('#signup-error').html('<p>Login Failed</p>')
          console.log('err signing up', e)
        })
    })
})

$('#modal2').modal({
  onOpenEnd: () => {
    console.log('OPEN')
  }
})

$('#modal1').modal({
  onOpenEnd: () => {}
})
