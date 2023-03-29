import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Header.css'
import '../css/Navbar.css'


export const Header = () => {
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
                </ul>
            </nav>
            <div className='clear'></div>
            {/* END HEADER */}
        </>
    )
}
