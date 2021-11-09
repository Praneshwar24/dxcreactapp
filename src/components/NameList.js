import React from 'react'

export default function NameList() {

    const names = ['Pranesh', 'Harish', 'Roy', 'Nandha', 'Fazil']
    const namesList = names.map(name => <h2>{name}</h2>)
    return (
        <div>{namesList}</div>
    )
}
