import React from 'react';
import {useForm} from '../hook/useForm'
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();

  const {name, email, password, onInputChange, onResetForm} = 
  useForm({
    name: '',
    email: '',
    password: '',
  });

  const onLogin = (e) => {
    e.preventDefault()
    navigate('/dashboard' , {
      replace: true,
      state: {
        logged: true,
        name
      }
    });
    onResetForm();
  };

  return (
    <div className="wrapper">
      <form onSubmit={onLogin}>
        <h1>Aula Virtual</h1>
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

        <button>Iniciar Sesión</button>
        <Link to='/register'>Si no tienes una cuenta. Registrate</Link>
      </form>
    </div>
  )
}
