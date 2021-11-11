import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('--REGULAR Component--')
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
