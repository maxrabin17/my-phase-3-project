import React, { useState } from 'react'
import Contacts from './Contacts'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
        if (isLoggedIn) {
            return <Contacts />
        }
    }

    return (
        <div className = "sign-up-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={ handleLogin }>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
