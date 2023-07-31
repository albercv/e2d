import React from 'react'
import jwt_decode from 'jwt-decode';
import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import { useUser } from './UserContext';
import '../css/Header.css'
import '../css/Navbar.css'
import { Tooltip } from './Tooltip';


export const Header = () => {


    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    /* global google */
    const { user, setUser } = useUser();
    const [isUserLogged, setIsUserLogged] = useState(false);
    const googleButton = useRef(null)
    const loginData = useRef(null)

    //Tutorial made this a function instead const
    const handleCallbackResponse = (response) => {
        let userObject = jwt_decode(response.credential)
        console.log(userObject);
        setUser(userObject);
        googleButton.current.className = 'hide';
    }

    const handleSignOut = (e) => {
        setUser(null);
        googleButton.current.className = '';
    }

    useEffect(() => {

        // let googleId = web.map(secret => {return secret.client_id}); 

        const loadScript = (url, callback) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.onload = callback;
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        };

        //TODO store clientId in server
        loadScript('https://accounts.google.com/gsi/client', () => {
            google.accounts.id.initialize({
                client_id: apiKey,
                callback: handleCallbackResponse,
            });

            google.accounts.id.renderButton(document.getElementById('signInDiv'), {
                theme: 'outline',
                size: 'small'
            });
        });
    }, [])

    useEffect(() => {
        setIsUserLogged(!isUserLogged);
    }, [user])

    return (
        <>
            {/* HEADER */}
            <header className='header'>
                <div>
                    <img src="./images/logo.png" alt='logo' className='logo' />
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
                    <li className='navLi'>
                        <Tooltip content="Comming Soon!">
                            <a href="javascript:void(0)" >Blog</a>
                        </Tooltip>
                    </li>
                    <li className='navLi'>
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/rent">
                            Alquiler
                        </NavLink>
                    </li>
                    <li className='navLi tooltip-container'>
                        <Tooltip content="Comming Soon!">
                            <a href="javascript:void(0)" >Lenguajes</a>
                        </Tooltip>
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
                        <Tooltip content="Comming Soon!">
                            <a href="javascript:void(0)" >Frameworks</a>
                        </Tooltip>
                        <ul>
                            <li>Spring boot</li>
                            <li>React js</li>
                        </ul>
                    </li>

                    <li className='navLi'>
                        <Tooltip content="Comming Soon!">
                            <a href="javascript:void(0)" >Proyectos</a>
                        </Tooltip>
                    </li>
                    <li className='navLi'>
                        <Tooltip content="Comming Soon!">
                            <a href="javascript:void(0)" >Background</a>
                        </Tooltip>
                    </li>
                    <li className='navLi'>
                        <NavLink className={({ isActive }) => { return isActive ? 'active' : '' }} to="/contact">
                            Contacto
                        </NavLink>
                    </li>
                    <li ref={googleButton} id="signInDiv" className="navLi"></li>

                    {!isUserLogged &&
                        <li ref={loginData} className="navLi login" onClick={handleSignOut}>
                            {user && user.picture ? <img className="loginElem" alt='user picture' src={user.picture} /> : null}
                            {user && user.name ? <span className="loginElem">{user.name}</span> : null}
                        </li>
                    }
                </ul>
            </nav>
            <div className='clear'></div>
            {/* END HEADER */}
        </>
    )
}
