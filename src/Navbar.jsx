import React from 'react'
import { Outlet, Link, useLocation, useNavigate, replace } from 'react-router-dom'

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const onLogout = () =>{
    navigate('/login' , {
      replace: true,
    })
  }

  return (
    <>
        <header>
          <h1>
            <Link to='/'>Logo</Link>
          </h1>

          {
            state?.logged?
            (

              <div className="user">
                <span className="username">{state?.name}</span>
                <button className='btn-logout' onClick={onLogout}>Cerrar Sesion</button>
              </div>

            ) : 
            (

              <nav>
                <Link to='/login'>Iniciar Sesión</Link>
                <Link to='/register'>Registarse</Link>
              </nav>
            )
          }
        </header>

        <Outlet/>
    </>
  )
}
