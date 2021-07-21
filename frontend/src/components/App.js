import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className = 'navbar'>
                <Container>
                <Navbar.Brand href="/">Contact Book App</Navbar.Brand>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route path = "/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Signup />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
