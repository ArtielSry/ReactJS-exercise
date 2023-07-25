import React, { useState } from 'react'

const FormsNotControlled1 = () => {
    const [search, setSearch] = useState('')
  return (
    <>
        <form onSubmit={ev => {
            ev.preventDefault();
            setSearch(ev.target.search.value);
            }}>
        <input type='text' name='search' autoComplete='off'/>
        <button type='submit'>Submit</button>
        </form>
        <p>Result of: {search}</p>
    </>
  )
}

export default FormsNotControlled1

/*
Formulario no controlado: se usa para cosas muy sencillas.
React no es capaz de controlar el valor de este formulario (no sabe lo que esta en el input).
Simplemente es capaz de reaccionar a un evento (en este caso 'submit').
Osea, es necesario esperar a que suceda algún evento, como darle al boton, para poder coger los datos.
*/


const FormsNotControlled2 = () => {
  return (
    <>
        <form onSubmit={ev => {
            ev.preventDefault()

            const email = ev.target.email.value;
            const password = ev.target.password.value;

            login(email,password)

        }}>
            <input type='text' name='email' placeholder='email'/>
            <input type='password' name='password' placeholder='password'/>
            <button type='submit'>Login</button>
        </form>
    </>
  )
}

const login = (email, password) => {
    if(email === 'hola@gmail.com' && password === 'test') alert('login correcto')
    else alert ('login incorrecto')
}