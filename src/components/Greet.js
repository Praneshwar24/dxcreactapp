import React from 'react'

/* function Greet(){
    return <h1>Welcome Praneshwar</h1>
} */

const Greet = (props) => {
    console.log(props);
    return (
        <div>
              <h1> hello  {props.name} you are from {props.college}</h1>
            {props.children}
        </div>
    )
}
export default Greet