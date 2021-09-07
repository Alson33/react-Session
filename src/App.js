import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import NextPage from './NextPage'
import ErrorPage from './ErrorPage'

// object destructuring
const App = ({name}) => {

    // useState returns an array with 
    // first index having the default value
    // second index having the setter function
    // useState takes one parameter which is the default state
    // if not provided then the default state is undefined
    // [a, b] --> array destructuring
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(10)
    // const state = useState(0) // default state
    // console.log(state);
    // const count = state[0]
    // const setCount = state[1]
    // console.log(setCount);
    // console.log(count);

    // useEffect runs everytime the state changes or re-render
    // occurs
    useEffect(() => {
        // if(count % 3 === 0)
            console.log('count is '+count);
            console.log(`number is ${number}`); // string interpolation
        // console.log('useEffect run...');
    }, [count, number])

    // list of dependencies --> [] runs at first reload only
    // if non set --> re-renders every time

    const handleIncrease = () => {
        if(count < 9)
            setCount(count+1)

        setNumber(20)
    }
    return (
        // Router or BrowserRouter used as wrapper for react-router-dom
        <Router> 
            {/* Switch the route according to first come first serve */}
            <Switch>
                {/* Route has path that determines what content to show */}
                {/* exact is for comparing path exactly */}
                <Route exact path="/">
                    <h1>Welcome, {name}</h1>
                    <p>Count = {count}</p>
                    <p>Number = {number}</p>
                    <button onClick={handleIncrease}>Increase</button>
                    <button onClick={() => setCount(count-1)}>Decrease</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                    <button onClick={() => setNumber(Math.random())}>Number Change</button>
                    {/* Link is corresponding of a tag of HTML */}
                    <Link to="/nextPage" component={NextBtn} />
                </Route>
                <NextPage />
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    )
}

const NextBtn = () => {
    return <a href="/nextPage"> 
        Go to next Page
    </a>
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