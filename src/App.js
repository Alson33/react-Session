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
    const [data, setData] = useState([])
    const [userName, setUserName] = useState('')
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
            test()
        // console.log('useEffect run...');
    }, [count, number])

    useEffect(() => {
        // we can have multiple useEffect only the list of dependencies 
        // have to be different
        setTimeout(() => {
            setData(["Alson", "Someone"])
            setUserName("Alson")
        }, 3000)
    }, [])

    // list of dependencies --> [] runs at first reload only
    // if non set --> re-renders every time

    const handleIncrease = () => {
        // if(count < 9)
            setCount(count+1)

        setNumber(20)
    }

    const test = () => {
        // F && T --> F
        // F0 && F --> F0
        // T && T0 --> T0
        // T && F --> F
        // if(count > 10 && true){
        //     console.log("Yes");
        // }

        // T0 || T --> T0
        // T || F --> T
        // F || T --> T
        // F || F0 --> F0
        if(count > 10 || false){
            console.log("OR");
        }
    }

    // if(count === 8){
    //     return <div>Count is 8</div>
    // }

    return (
        // Router or BrowserRouter used as wrapper for react-router-dom
        <Router> 
            {/* Switch the route according to first come first serve */}
            <Switch>
                {/* Route has path that determines what content to show */}
                {/* exact is for comparing path exactly */}
                <Route exact path="/">
                    <h1>Welcome, {userName || "user"}</h1>
                    {/* condition ? true ko output : false ko output */}
                    <p>Count = {count < 20 ? count : "Count is greater than 20"}</p>
                    <p>Number = {number}</p>
                    <h2>Data</h2>
                    <p>{data[0] === undefined ? (<ul><li>....</li></ul>) : data.map(item => (<li>{item}</li>))}</p>
                    {/* if true show output of after && */}
                    <p>{data && data.map(item => (<li>{item}</li>))}</p>
                    {/* if true retrun if false return output of after || */}
                    <p>{count || "Count is 0"}</p>
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