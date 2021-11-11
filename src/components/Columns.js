import React from 'react'

function Columns() {
    const items = [
        {
            title: 'Praneshwar',
            id: 1,
            description: 'I will win no matter what'
        },
        {
            title: 'Roy',
            id: 2,
            description: 'I will win no matter what'
        },
        {
            title: 'Harish',
            id: 3,
            description: 'I will win no matter what'
        },
    ]
    return (
        <React.Fragment>
            {
                items.map(
                    item => (
                        <React.Fragment key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </React.Fragment>
                    )
                )

            }
            <td>name</td>
            <td>Praneshwar</td>
        </React.Fragment>

    )
}

export default Columns
