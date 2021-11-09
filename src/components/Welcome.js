import React, { Component } from "react";

class Welcome extends Component {

    render() {
        const { name, alias } = this.props
        return <h1>Welcome Mr {name} your alias is {alias}</h1>
    }
}
export default Welcome