import React, { useState, useContext } from 'react'
import { Link, Route } from 'react-router-dom'

// creating a context
const TestContext = React.createContext()

const NextPage = () => {
    const [test, setTest] = useState(20)
    return (
        <Route path="/nextPage">
            <div>
                Hello welcome to Next Page
                <Link to="/">Go back Home</Link>
            </div>
            {/* wrapping with the created context provider */}
            <TestContext.Provider value={{ test, setTest }}>
                <OneMorePage />
            </TestContext.Provider>
        </Route>
    )
}

const OneMorePage = () => {
    return (
        <AnotherPage />
    )
}

const AnotherPage = () => {
    const {test, setTest} = useContext(TestContext)
    return (
        <LastPage />
    )
}

const LastPage = () => {
    // using the passed context values
    const {test, setTest} = useContext(TestContext)
    return (
        <button onClick={() => setTest(30)}>{test}</button>
    )
}

export default NextPage
