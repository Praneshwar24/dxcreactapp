import React, { Component } from 'react'
class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            Comments: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.Username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.Comments}></textarea>
                </div>
            </form>
        )
    }
}

export default Form

