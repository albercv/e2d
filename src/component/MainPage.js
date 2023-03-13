import React from 'react'

export const MainPage = () => {
    return (
        <div className='mainContainer'>
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
                    <li className='navLi'><a href='#' >Home</a></li>
                    <li className='navLi'><a href='#' >Contenido</a></li>
                    <li className='navLi'><a href='#' >Requerimientos</a></li>
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
                    <li className='navLi'><a href='#' >Blog</a></li>
                    <li className='navLi'><a href='#' >Contacto</a></li>
                </ul>
            </nav>
            <div className='clear'></div>
            {/* END HEADER */}
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
                    <section className='sectionPart'>
                        <h1>Título sección</h1>
                        <article>
                            <img src="" alt="" />
                            <h2 className='articleTitle'>Título noticia</h2>
                            <p className='articleText'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sem urna,
                                a viverra neque euismod at. Mauris elementum egestas metus a lacinia. Proin augue
                                mi, congue at justo sed, aliquam facilisis turpis. Maecenas ultricies eros in turpis
                                convallis vehicula. Ut consectetur leo at ante sodales pulvinar. Nullam eros lectus,
                                rutrum in congue ut, mollis sit amet tellus. Donec sagittis semper felis, a faucibus
                                tellus vestibulum a. Curabitur luctus ultrices turpis, vitae auctor elit suscipit eu.
                                Fusce venenatis viverra dolor, ac bibendum dui pellentesque nec.
                            </p>
                            <p>
                                Praesent ac nisi nisl. Praesent eu nunc lectus. Integer massa tortor, sagittis non
                                euismod nec, varius et diam. Vivamus a hendrerit metus. Vestibulum quam enim, accumsan
                                id risus eu, rhoncus bibendum nisl. Proin suscipit consequat luctus. Fusce sagittis odio
                                sit amet nisl commodo finibus. Vivamus mauris tellus, commodo non dictum id, faucibus et
                                diam. Sed at erat nec eros volutpat molestie. Vivamus a ultrices leo. In volutpat, sapien
                                at facilisis pellentesque, enim orci dignissim quam, et elementum leo diam eget massa.
                                Sed rutrum quam nec ligula pellentesque, id rutrum augue commodo. Quisque vehicula eleifend
                                ante quis fermentum. Etiam nec diam quis felis ultrices posuere non eu velit. Curabitur id
                                risus luctus, pretium augue quis, tincidunt risus.
                            </p>
                            <p>
                                Sed luctus fringilla justo auctor luctus. Integer condimentum elementum nisi eget vulputate. Aenean
                                dolor lectus, pulvinar egestas nibh vitae, dictum posuere lacus. Pellentesque ac tempor nulla. Praesent
                                ut tincidunt augue, et elementum arcu. Praesent fringilla fermentum nibh a congue. Phasellus facilisis,
                                metus vel luctus mollis, ante libero tincidunt turpis, a pulvinar dui quam eget sem. Nam sed molestie
                                ligula. Pellentesque non elementum dolor.
                            </p>
                            <p>
                                Praesent gravida at risus non volutpat. Morbi lectus augue, tempor gravida tristique sit amet, tincidunt id
                                quam. Aliquam condimentum malesuada tempus. Nulla molestie laoreet nibh, vel dapibus justo laoreet eget.
                                Duis ornare suscipit odio eget vulputate. Aliquam ut ex consectetur, bibendum turpis at, laoreet erat. Nunc
                                sit amet maximus ex. Sed fermentum elit eget mauris vestibulum lobortis. Suspendisse tortor quam, consequat
                                quis lobortis non, ultrices sed quam. Vivamus eget varius dui. Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas. Maecenas id nunc a quam vestibulum viverra.
                            </p>
                        </article>
                    </section>
                    <section className='sectionPart'>
                        <h2>Título sección</h2>
                        <article>
                            <h5>Título noticia</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sem urna,
                                a viverra neque euismod at. Mauris elementum egestas metus a lacinia. Proin augue
                                mi, congue at justo sed, aliquam facilisis turpis. Maecenas ultricies eros in turpis
                                convallis vehicula. Ut consectetur leo at ante sodales pulvinar. Nullam eros lectus,
                                rutrum in congue ut, mollis sit amet tellus. Donec sagittis semper felis, a faucibus
                                tellus vestibulum a. Curabitur luctus ultrices turpis, vitae auctor elit suscipit eu.
                                Fusce venenatis viverra dolor, ac bibendum dui pellentesque nec.
                            </p>
                        </article>
                    </section>
                    <section className='sectionPart'>
                        <h1>Título sección</h1>
                        <article>
                            <h6>Título noticia</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sem urna,
                                a viverra neque euismod at. Mauris elementum egestas metus a lacinia. Proin augue
                                mi, congue at justo sed, aliquam facilisis turpis. Maecenas ultricies eros in turpis
                                convallis vehicula. Ut consectetur leo at ante sodales pulvinar. Nullam eros lectus,
                                rutrum in congue ut, mollis sit amet tellus. Donec sagittis semper felis, a faucibus
                                tellus vestibulum a. Curabitur luctus ultrices turpis, vitae auctor elit suscipit eu.
                                Fusce venenatis viverra dolor, ac bibendum dui pellentesque nec.
                            </p>
                            <p>
                                Praesent ac nisi nisl. Praesent eu nunc lectus. Integer massa tortor, sagittis non
                                euismod nec, varius et diam. Vivamus a hendrerit metus. Vestibulum quam enim, accumsan
                                id risus eu, rhoncus bibendum nisl. Proin suscipit consequat luctus. Fusce sagittis odio
                                sit amet nisl commodo finibus. Vivamus mauris tellus, commodo non dictum id, faucibus et
                                diam. Sed at erat nec eros volutpat molestie. Vivamus a ultrices leo. In volutpat, sapien
                                at facilisis pellentesque, enim orci dignissim quam, et elementum leo diam eget massa.
                                Sed rutrum quam nec ligula pellentesque, id rutrum augue commodo. Quisque vehicula eleifend
                                ante quis fermentum. Etiam nec diam quis felis ultrices posuere non eu velit. Curabitur id
                                risus luctus, pretium augue quis, tincidunt risus.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
            {/*END SIDE VAR & CONTENT */}
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
    )
}
