import React from 'react'
//demo on inline styling
const heading = {
    fontSize: '50px',
    color: 'red',
}

function Inline() {
    return (
        <div>
            <h1 className='error'>inline error</h1> {/* error style is locally scoped no need to import  */}
            <h1 style={heading}> Inline Heading</h1>
        </div>
    )
}

export default Inline
