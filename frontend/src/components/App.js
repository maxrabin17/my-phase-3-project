import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css'
import Login from './Login'
import Signup from './Signup'
import Contacts from './Contacts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = (props) => {

    const [users, setUsers] = useState({})
    const [contacts, setContacts] = useState([])

    const fetchUsers = () => {
        fetch("http://localhost:9292/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            // .then(data => console.log(data))
    }
    
    const fetchContacts = () => {
        fetch(`https://localhost:9292/contacts`)
        .then(res => res.json())
        .then(data => setContacts(data))
    }

    useEffect(() => {
        fetchUsers()
        fetchContacts()
    }, [])

    return (
        <div>
            <Navbar bg="primary" variant="dark" className = 'navbar'>
                <Container>
                <Navbar.Brand href="/">Contact Book App</Navbar.Brand>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path = "/login">
                        <Login users={ users }/>
                    </Route>
                    <Route exact path="/">
                        <Signup />
                    </Route>
                    <Route exact path='/users/:id'>
                        <Contacts {...props} contacts={ contacts }/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
