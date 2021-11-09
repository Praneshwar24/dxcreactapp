import React from 'react'

/* function Greet(){
    return <h1>Welcome Praneshwar</h1>
} */

const Greet = props => {
    const {name,college} = props
    //console.log(props);
    return (
        <div>
              <h1> hello  {name} you are from {college}</h1>
        </div>
    )
}
export default Greet