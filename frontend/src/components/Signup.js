import React, { useState } from 'react'
import Login from './Login'
import ReactDOM from 'react-dom';
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


const Signup = () => {
    
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    
    const fetchForm = (form) => {
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(form)
        }
        fetch("http://localhost:9292/users", config)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }



    const handleClick = (e) => {
        e.preventDefault()
        fetchForm(form)
        setForm({
            username: "",
            password: ""
        })
        e.target.reset()
        // alert("Account created head to Login link, and Login to continue!")
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className = "sign-up-form">
            <Form onSubmit={handleClick}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Create Username" onChange={ handleChange } name="username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Create Password" onChange={ handleChange } name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                    <h4 className = 'account'>Already have an account?</h4>
                <Link to='/login'>Login</Link>
            </Form>
        </div>
    )
}

export default Signup
