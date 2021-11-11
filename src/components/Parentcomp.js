import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class Parentcomp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Praneshwar-parentcompnew'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Praneshwar-parentcomp-memo'
            })
        }, 2000);
    }

    render() {
        console.log('******************* Parent Component *******************')
        return (
            <div>
                Parent component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default Parentcomp
