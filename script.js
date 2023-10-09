script.js

  const name = document.getElementById('name')
  const password = document.getElementById('password')
  const form = document.getElementById('form')

  form.addEventListener('submit',(e) => {let messages = []
if (name.value===''|| name.value == null) {messages.push('Name is required')
}
if (password.value.lenght <=6) {messages.push('Password must be longer than 6 characters')}
if (password.value.lenght >=15) {messages.push('Password must be less than 6 charecters')}
if(password.value === 'password') {messages.push('Passeord cannot be password')}

  })