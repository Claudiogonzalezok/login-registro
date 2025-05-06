import React from 'react';
import {useForm} from '../hook/useForm'
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {

 const navigate = useNavigate();
 const mensaje = () => alert("Su usuario fue creado con exito!!, Lo redirijimos al login");

  const {name, email, password, onInputChange, onResetForm} = 
  useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegister = (e) => {
    e.preventDefault()
    navigate('/login' , {
      replace: false,
      state: {
        logged: false,
        name
      }
    });
    onResetForm();
  }

  return (
    <div className="wrapper">
      <form onSubmit={onRegister}>
        <h1>Registrarse</h1>
        <div className="input-group">
          <input 
            type="text"
            name='name'
            id='name'
            value={name}
            onChange={onInputChange}
            required
            autoComplete='off'            
          />
          <label htmlFor="name">Nombre:</label>
        </div>

        <div className="input-group">
          <input 
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={onInputChange}
            required
            autoComplete='off'            
          />
          <label htmlFor="email">Email:</label>
        </div>

        <div className="input-group">
          <input 
            type="password"
            name='password'
            id='password'
            value={password}
            onChange={onInputChange}
            required
            autoComplete='off'            
          />
          <label htmlFor="password">Contraseña:</label>
        </div>

        <button onClick = {mensaje} >Registrarse</button>

      </form>
    </div>
  )
}
