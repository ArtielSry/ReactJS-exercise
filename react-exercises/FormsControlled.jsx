import React, { useState } from 'react'

const FormsControlled = () => {

    const [search, setSearch] = useState('')

  return (
    <>
        <form onSubmit={ev => {
            ev.preventDefault();
            setSearch(ev.target.search.value);
            }}>
        <input type='text' 
                name='search' 
                autoComplete='off'
                value={search}
                onChange={ev => setSearch(ev.target.value)}/>

        <button type='submit'>Submit</button>
        </form>
        <p>Result of: {search}</p>
    </>
  )
}

export default FormsControlled

/*
Formulario controlado: se usa para acciones más dinámicas, como busquedas en google.
En el input podemos poner el evento onChange={}, que se ejecuta cada vez que el valor cambie,
y ejecutar ahí 'setSearch' directamente.
Con esto lo que conseguimos es que segun vayamos escribiendo vamos a ir recuperando el valor
inmediatamente en el {search};
Usamos tambien el atributo 'value' en el input, y ES EL VALOR ACTUAL
*/

const FormsControlled2 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const error = validate(email,password)
    return (
      <>
          <form onSubmit={ev => {
              ev.preventDefault()
              login(email,password)
  
          }}>
              <input 
                type='text' 
                name='email' 
                placeholder='email'
                value={email}
                onChange={ev => setEmail(ev.target.value)}/>
              <input 
                type='password'
                name='password'
                placeholder='password'
                value={password}
                onChange={ev => setPassword(ev.target.value)}/>
                <p>{error}</p>
              <button type='submit' disabled={error}>Login</button>
          </form>
      </>
    )
  }
  
  const login = (email, password) => {
      if(email === 'hola@gmail.com' && password === 'test') alert('login correcto')
      else alert ('login incorrecto')
  }

  const validate = (email, password) => {
    if(!email.includes('@')) return 'Email incorrect'
    if(password.length < 4) return 'Password incorrect'
  }

  /*
  Este tipo de formulario controlado podria aplicarse por ejemplo aun registro de usuario
  en una web; se puede aplicar a las contraseñas
  (sale mensaje de error si la contraseña no cumple con ciertos requisitos).
  Utilizamos la propiedad disabled en el button para deshabilitarlo mientras haya mensaje de error porque en la funcion validate
  no se cumple las condiciones.
  */