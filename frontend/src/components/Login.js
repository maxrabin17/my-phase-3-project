import React, { useState, useEffect } from 'react'
// import { createBrowserHistory } from "history"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import Contacts from './Contacts'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({users}) => {

    const history = useHistory()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    // const [users, setUsers] = useState({})

    const compareFetchToForm = (e) => {
        e.preventDefault()
        let user = users.data.find((a) => a.username == form.username)
            history.push(`/users/${user.id}`)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className = "sign-up-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={ handleChange } name = "username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={ handleChange } name = "password"/>
                </Form.Group>
                    <Button variant="primary" type="submit" onClick={compareFetchToForm}>
                        Login
                    </Button>
            </Form>
        </div>
    )
}

export default Login
