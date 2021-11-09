import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Kakashi</div>
        }
        else {
            message = <div>Welcome Jiraiya</div>
        }
        return <div>{message}</div>
        /* if (this.state.isLoggedIn) {
            return <div>Welcome Praneshwar</div>
        }
        else {
            return <div>Welcome Naruto</div>
        } */
        /*   return (
              <div>
                 <div>Welcome Praneshwar</div> 
                 <div>Welcome Naruto</div>
              </div>
          ) */
    }
}

export default UserGreeting
