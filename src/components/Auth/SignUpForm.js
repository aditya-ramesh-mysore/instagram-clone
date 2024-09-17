import React, { useState } from 'react';
import { Button, Form, Stack, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: "", confirmPassword: ""})

    const handleSignUp = (e) => {
        e.preventDefault()
        if(credentials.email == "" || credentials.password == "" || credentials.confirmPassword == ""){
            alert("Please fill all the details")
            return
        }
        if(credentials.password == credentials.confirmPassword){
            navigate("/")
        }
        
    }

  return (
    <>
    <Form>
        <Stack gap={2}>
            <Image src="/images/logo.png" />
            <Form.Group controlId="formEmail" >
                <Form.Control type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setCredentials({...credentials, confirmPassword: e.target.value})}/>
            </Form.Group>
            <Button variant="info" type="submit" className="w-100 mb-2" onClick={(e) => handleSignUp(e)}>
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