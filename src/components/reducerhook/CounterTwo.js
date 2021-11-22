import React from 'react'
import { useReducer } from 'react'
//demo about state as an object
const initialState = {   //currently this object has only one partition called firstCounter
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { firstCounter: state.firstCounter + action.value }
        case 'decrement': return { firstCounter: state.firstCounter - action.value }
        case 'reset': return initialState
        default: return state
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}> Increment </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}> Decrement </button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}> Increment 5 </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}> Decrement 5 </button>
            <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
        </div>
    )
}

export default CounterTwo
