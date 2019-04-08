import React from 'react';
import { connect } from 'react-redux';

const Articles = ({ articles }) => {
    return (
        <div>
            <ul>
                {articles.map(article => {
                    return <li key={article.title}>{article.title}<br />{article.article}</li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return { articles: state.articles };
}

export default connect(mapStateToProps)(Articles);