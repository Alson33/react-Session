import React from 'react'
import { Link, Route } from 'react-router-dom'

const NextPage = () => {
    return (
        <Route path="/nextPage">
            <div>
                Hello welcome to Next Page
                <Link to="/">Go back Home</Link>
            </div>
        </Route>
    )
}

export default NextPage
