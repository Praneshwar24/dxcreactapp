import React from 'react'

/* this is a stateless component */

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {props.praneshwarHandler}>greet parent</button>
        </div>
    )
}

export default ChildComponent
