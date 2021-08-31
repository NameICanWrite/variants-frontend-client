import React from 'react'
import { useSelector } from 'react-redux'
import Article from './Article/Article'

function Articles() {
    const articles = useSelector((state) => state.articles.articlesData)
    return (
        <>
            {articles.map(article => {
            return  <Article key={article.id} article={article} />
            })}
        </>
    )
}

export default Articles
