import React, { useEffect, useState } from 'react'
import {articleList} from '../assets/articles/articles.js'
import '../css/Content.css'

export const Content = () => {

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        //TODO should be load from server
        
        setArticles(articleList);
    }, [])

    return (
            <>
            {articles.map((myArticle, index) => ( 
            <section key={index} className='sectionPart'>
                <h1>Título sección</h1>
                <article>
                    <img src="" alt="" />
                    <h2 className='articleTitle'>{myArticle.title}</h2>
                    <p className='articleText'>
                        {myArticle.summary}
                    </p>
                </article>
            </section>
            ))}
            </>
    )
}
