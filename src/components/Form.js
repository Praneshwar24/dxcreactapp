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
    handleSubmit = (event) => {
        alert(`${this.state.Username} ${this.state.Comments} ${this.state.Topics}`)
        event.preventDefault() //conents will not be refreshed/vanish
    }
    render() {
        const { Username, Comments, Topics } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={Username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={Comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={Topics} onChange={this.handleTopicsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form

