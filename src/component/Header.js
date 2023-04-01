import React from 'react'
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Header.css'
import '../css/Navbar.css'


export const Header = () => {

    const [user, setUser] = useState({})

    //Tutorial made this a function instead const
    const handleCallbackResponse = (response) => {
      console.log(`Encoded JWT token ${response.credential}`)
      let userObject = jwt_decode(response.credential)
      console.log(userObject)
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true;
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "396387926684-5nj9r1eiop3meos8nhot9fphruq4grp0.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme: "outline",
          size: "small"
        }
      )
    }, [])

    return (
        <>
            {/* HEADER */}
            <header className='header'>
                <div>
                    <img src="./images/logo.png" className='logo' />
                </div>
                <h1 className='webTitle'>Evolve 2 Digital</h1>
                <h6 className='webSubTitle'>Evoluciona al digital</h6>
            </header>
            <nav className='nav'>
                <ul className='navUl'>
                    <li className='navLi'>
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className='navLi'><a href='#' >Blog</a></li>
                    <li className='navLi'>
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/rent">
                            Alquiler
                        </NavLink>
                    </li>
                    <li className='navLi'>
                        <a href='#' >Lenguajes</a>
                        <ul>
                            <li>
                                <a href="#">Java</a>
                            </li>
                            <li>
                                <a href="#">Javascript</a>
                            </li>
                            <li>
                                <a href="#">HTML5</a>
                            </li>
                            <li>
                                <a href="#">Css</a>
                            </li>
                            <li>
                                <a href="#">Groovy</a>
                            </li>
                        </ul>
                    </li>
                    <li className='navLi'>
                        <a href='#' >Frameworks</a>
                        <ul>
                            <li>Spring boot</li>
                            <li>React js</li>
                        </ul>
                    </li>
                    <li className='navLi'><a href='#' >Proyectos</a></li>
                    <li className='navLi'><a href='#' >Sobre mí</a></li>
                    <li className='navLi'><a href='#' >Reseñas</a></li>
                    <li className='navLi'>
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/contact">
                            Contacto
                        </NavLink>
                    </li>
                    { user && <li className='navLi'><img src={user.image}/>{user.name}</li>  }
                    <li id="signInDiv"></li>
                </ul>
                <img src={user.image}/>
            </nav>
            <div className='clear'></div>
            {/* END HEADER */}
        </>
    )
}
