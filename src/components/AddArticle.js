import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../redux/actions';


class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            article: ''
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const {title, article} = this.state
        this.props.addArticle({title, article})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Title:
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    </label>
                    <label>
                        Article Link:
                        <input type="text" name="article" onChange={this.handleChange} value={this.state.article} />
                    </label>
                    <button type="submit">Submit Article!</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addArticle })(AddArticle);