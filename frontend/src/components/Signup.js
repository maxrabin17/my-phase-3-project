import React from 'react'
import Login from './Login'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const Signup = () => {
    return (
        <div className = "sign-up-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
