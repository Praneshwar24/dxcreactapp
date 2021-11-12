import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
        this.ipRef = React.createRef()
    }
    focusInput() {
        this.ipRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.ipRef} />
            </div>
        )
    }
}

export default Input
