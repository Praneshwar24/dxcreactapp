import React from 'react'
import Person from './Person'

export default function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Naruto',
            age: '30',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Sasuke',
            age: '30',
            skill: 'Java'
        }, {
            id: 1,
            name: 'Sakura',
            age: '30',
            skill: 'Javascript'
        }, {
            id: 1,
            name: 'Kakashi',
            age: '30',
            skill: 'FullStack'
        },
    ]
    /* const personList = persons.map(person => <h2>I am {person.name}, I am {person.age} years old and my skill is {person.skill}</h2>) */
    const personList = persons.map(person => (<Person human={person}></Person>))
    return (
        <div>{personList}</div>
    )
}
