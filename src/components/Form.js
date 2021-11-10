import React, { Component } from 'react'
class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            Comments: '',
            Topics: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            Comments: event.target.value
        })

    }
    handleTopicsChange = (event) => {
        this.setState({
            Topics: event.target.value
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
                    <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.Topics} onChange={this.handleTopicsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default Form

