import React from 'react'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {

    const handleSubmit = () => {
        alert("Account Created! Head to Login link to continue!")
    }

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
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
