import React from 'react';
import { connect } from 'react-redux';

import './Articles.css'

const Articles = ({ articles }) => {
    return (
        <div className="container row content">
            <div className="col-md-7 submissions">
                <h3>Most Recent Submissions</h3>
                <div className="posts">
                    <ul>
                        {articles.reverse().map(article => {
                            return <li key={article.title}><h5>{article.title}</h5><span>{article.article}</span></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 aside">
                <div className="aside-content">
                    <h3>Where am I?</h3>
                    <p>The point of Read This! is to provide a hub for people to simply lay out an article that they found interesting. Too many sites are overcomplicated and make you have user accounts and comment systems. Not us. See the article, read the article, move on. That's the appeal of Read This!</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { articles: state.articles };
}

export default connect(mapStateToProps)(Articles);