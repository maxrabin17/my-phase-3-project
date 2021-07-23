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
                setUser(data.data.user)
                setContacts(data.data.userContacts)
                setLoading(false)
            })
            // .then(data => console.log(data))
    }

    // const fetchUsersContacts = () => {
    //     fetch("http://localhost:9292/users")
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //             setLoading(false)
    //         })
    //         // .then(data => console.log(data))
    // }
    
    // const fetchContacts = () => {
    //     fetch(`http://localhost:9292/contacts`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setContacts(data)
    //             setLoading(false)
    //         })
    // }

    useEffect(() => {
        fetchUsers()
        // fetchContacts()
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
            <Navbar bg="primary" variant="dark" className = 'navbar'>
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
                    <Route exact path='/users/:id'>
                        <Contacts contacts={contacts} user={user} setUserName={setUserName}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
