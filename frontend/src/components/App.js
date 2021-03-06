import React, {useEffect, useState} from 'react'
import { Navbar, Container } from 'react-bootstrap'
import '../App.css'
import Login from './Login'
import Signup from './Signup'
import Contacts from './Contacts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState("")
    const [user, setUser] = useState({})
    const [contacts, setContacts] = useState([])

    const fetchUsers = () => {
        fetch(`http://localhost:9292/users/search?q=${userName}`)
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
                setContacts(data.userContacts)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [userName])

    if (loading) {
        return (
            <div>
                ...Loading
            </div>
        )
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" className = 'navbar'>
                <Container>
                <Navbar.Brand href="/">Contact Book App</Navbar.Brand>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path = "/login">
                        <Login user={user} setUserName={setUserName} userName={userName}/>
                    </Route>
                    <Route exact path="/">
                        <Signup />
                    </Route>
                    <Route path='/contacts'>
                        <Contacts contacts={contacts} setContacts={setContacts} user={user} setUserName={setUserName} userName={userName}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
