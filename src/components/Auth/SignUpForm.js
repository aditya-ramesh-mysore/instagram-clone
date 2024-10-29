import React, { useState } from 'react';
import { Button, Form, Stack, Image, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useSignUpWithNewCredentials from '../../hooks/useSignUpWithNewCredentials';
import AlertComponent from '../Alert/Alerts';

export default function SignUpForm() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: "", name: ""})
    const {user, loading, error, signup} = useSignUpWithNewCredentials();

    const handleSubmit = async () => {
        await signup(credentials)
    }

  return (
    <>
    <Form>
        {
            error 
            ?
                <AlertComponent variant="danger" message={error} />
            :
                null
        }
        {
            user 
            ? 
                <AlertComponent variant="success" message={`${user.name} successfully signed up.`} /> 
            : 
                null
        }
        <Stack gap={2}>
            <Image src="/images/logo.png" />
            <Form.Group controlId="formName" >
                <Form.Control required type="name" placeholder="Username" onChange={(e) => setCredentials({...credentials, name: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formEmail" >
                <Form.Control required type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control required type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            </Form.Group>
            
            <Button variant="info" className="w-100 mb-2" onClick={() => handleSubmit()}>
                {loading ? <Spinner /> : null}
                Sign Up
            </Button>
            <p color='white' className="text-center my-2">OR</p>
            <Button variant="outline-info" className="w-100 mb-2" >
                <Image src='/images/google.png' width={20} height={20} className="me-2" />
                Log in with Google
            </Button>
        </Stack>      
        
    </Form> 
    </>
  );
}
