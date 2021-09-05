import React, { useState } from 'react'

// object destructuring
const App = ({name}) => {

    // useState returns an array with 
    // first index having the default value
    // second index having the setter function
    // useState takes one parameter which is the default state
    // if not provided then the default state is undefined
    // [a, b] --> array destructuring
    const [count, setCount] = useState(0)
    // const state = useState(0) // default state
    // const count = state[0]
    // const setState = state[1]
    // console.log(setCount);
    // console.log(count);
    const handleIncrease = () => setCount(count+1)
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <p>Count = {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={() => setCount(count-1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default App

// state --> preserve the value of certain variable until the app is running  
// Hooks

// count++ ==> count+1 => count = count+1
// count+1 ==> invisibleVar = count+1

// div
// H1 Welcome, {name}
// p count = {count}
// button increase
// () => {} === function() {console.log('hello');}