import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CommentsPage from './pages/CommentsPage'
import HomePage from './pages/HomePage'

const UseRoutes = () => {
    return <Switch>
        <Route path="/" exact>
            <HomePage />
        </Route>
        <Route path="/comments" exact>
            <CommentsPage />
        </Route>
        <Redirect to="/" />
    </Switch>
}

export default UseRoutes