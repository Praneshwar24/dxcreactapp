import React from 'react'
//demo on inline styling
const heading = {
    fontSize: '50px',
    color: 'red'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Heading</h1>
        </div>
    )
}

export default Inline
