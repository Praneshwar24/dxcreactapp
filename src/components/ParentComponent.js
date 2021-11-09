import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Minato'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    /* i want to pass the reference of this method as a property to the child */
    greetParent() {
        alert(`Hello ${this.state.parentName}`) //string templates-- es6
    }



    render() {
        return (
            <div>
                <ChildComponent praneshwarHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
