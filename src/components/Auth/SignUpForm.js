import React, { useState } from 'react';
import { Button, Form, Stack, Image, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useSignUpWithNewCredentials from '../../hooks/useSignUpWithNewCredentials';

export default function SignUpForm() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: "", name: ""})
    const {loading, error, signup} = useSignUpWithNewCredentials();

  return (
    <>
    <Form>
        {
            error 
            ?
                <Alert variant="danger" dismissible>
                    {error.message}
                </Alert>
            :
                null
        }
        <Stack gap={2}>
            <Image src="/images/logo.png" />
            <Form.Group controlId="formName" >
                <Form.Control type="name" placeholder="Name" onChange={(e) => setCredentials({...credentials, name: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formEmail" >
                <Form.Control type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            </Form.Group>
            
            <Button variant="info" className="w-100 mb-2" onClick={() => signup(credentials)}>
                {loading ? <Spinner /> : null}
                Sign Up
            </Button>
            <p color='white' className="text-center my-2">OR</p>
            <Button variant="outline-info" className="w-100 mb-2">
                <Image src='/images/google.png' width={20} height={20} className="me-2" />
                Log in with Google
            </Button>
        </Stack>      
        
    </Form> 
    </>
  );
}
