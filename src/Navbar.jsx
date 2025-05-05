import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <header>
          <h1>
            <Link to='/'>Logo</Link>
          </h1>

          <nav>
            <Link to='/Login'>Iniciar Sesión</Link>
            <Link to='/Register'>Registarse</Link>
          </nav>
          <div className="user">
            <span className="username">Roberto</span>
            <button className='btn-logout'>Cerrar Sesiòn</button>
          </div>
        </header>

        <Outlet/>
    </>
  )
}
