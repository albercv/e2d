import React from 'react'
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { NotFound } from '../component/NotFound'
import { Content } from '../component/Content'
import { Header } from '../component/Header'
import { Rent } from '../component/Rent'

export const MainPage = () => {
    return (
        <BrowserRouter>
        <div className='mainContainer'>
            <Header />
            {/* SIDE VAR & CONTENT */}
            <div className='content'>
                <aside>
                    <div className='asideBox'>
                        <h1>Entra en la web</h1>
                        <div>
                            <span>Usuario:</span>
                            <input type="text" value="" />
                        </div>
                        <div>
                            <span>Contraseña:</span>
                            <input type="text" value="" />
                        </div>
                        <input type="button" value="Entra en la web" />
                        <a href='#'>evolve2digital.com</a>
                        <a href='#'>evolve2digital.com</a>
                        <a href='#'>evolve2digital.com</a>
                    </div>
                    <div className='asideBox'>
                        <h1>Entra en la web</h1>
                        <div>
                            <span>Usuario:</span>
                            <input type="text" value="" />
                        </div>
                        <div>
                            <span>Contraseña:</span>
                            <input type="text" value="" />
                        </div>
                        <input type="button" value="Entra en la web" />
                        <div className='links'>
                            <a href='#'>evolve2digital.com</a>
                            <a href='#'>evolve2digital.com</a>
                            <a href='#'>evolve2digital.com</a>
                        </div>
                    </div>
                    <div className='asideBox'>
                        <h1>Entra en la web</h1>
                        <div>
                            <span>Usuario:</span>
                            <input type="text" value="" />
                        </div>
                        <div>
                            <span>Contraseña:</span>
                            <input type="text" value="" />
                        </div>
                        <input type="button" value="Entra en la web" />
                        <a href='#'>evolve2digital.com</a>
                        <a href='#'>evolve2digital.com</a>
                        <a href='#'>evolve2digital.com</a>
                    </div>
                </aside>
                <div className='sectionContainer'>
                <Routes>
                    <Route path='/' element={<Content/>} />
                    <Route path='/home' element={<Content/>} />
                    <Route path='/rent' element={<Rent/>} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
                </div>
            </div>
            {/*END SIDE VAR & CONTENT */}
            <div className='clear'></div>
            {/* FOOTER */}
            <footer>
                <p>
                    <a href='mailto:hello@evolve2digital.com'>
                        <span>
                            &copy;
                        </span>
                        Alberto Carrasco
                    </a>
                </p>
            </footer>
            {/* End FOOTER */}
        </div>
        </BrowserRouter>
    )
}
