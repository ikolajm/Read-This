import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addArticle } from '../redux/actions';
import { connect } from 'react-redux'; 


class Header extends Component {
    state = {
        modal: false,
        title: '',
        article: ''
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            title: '',
            article: ''
        }))
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
        this.setState({
            modal: false,
            title: '',
            article: ''
        })
    }

    render() {
        return (
            <nav>
                <h2>Read This!</h2>
                <div>
                    <h6 onClick={this.toggle}>Add an article</h6>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add an Article!</ModalHeader>
                    <ModalBody>
                        <label>
                            Title:
                            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                        </label>
                        <label>
                            Article Link:
                            <input type="text" name="article" onChange={this.handleChange} value={this.state.article} />
                        </label>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </nav>

        )
    }
}

export default connect(null, { addArticle })(Header);