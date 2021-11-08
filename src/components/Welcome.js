import React, { Component } from "react";

class Welcome extends Component {

    render() {
        return <h1>Welcome Mr {this.props.name} your alias is {this.props.alias}</h1>
    }
}
export default Welcome