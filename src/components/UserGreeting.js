import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome Praneshwar</div>
        }
        else {
            return <div>Welcome Naruto</div>
        }
        /*   return (
              <div>
                 <div>Welcome Praneshwar</div> 
                 <div>Welcome Naruto</div>
              </div>
          ) */
    }
}

export default UserGreeting
