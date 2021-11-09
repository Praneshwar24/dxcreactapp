import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let message
        return (
            this.state.isLoggedIn ?
                <div>Welcome Kakashi</div> :
                <div>Welcome Jiraiya</div>
        )
        /* let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Kakashi</div>
        }
        else {
            message = <div>Welcome Jiraiya</div>
        }
        return <div>{message}</div> */
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
