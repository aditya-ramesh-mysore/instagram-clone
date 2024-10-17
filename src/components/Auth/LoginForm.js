import React, { useState } from 'react';
import { Button, Form, Stack, Image, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

export default function LoginForm() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: ""})

    const handleLogin = () => {
        if(credentials.email == "" || credentials.password == ""){
            alert("Please fill all the details")
            return
        }
        console.log(credentials);
        navigate("/");
    }

    return ( <> 
    <Form>
        <Stack gap={2}>
            <Image src="/images/logo.png" />
            <Form.Group controlId="formEmail" >
                <Form.Control type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            </Form.Group>
            <Button variant="info" type="submit" className="w-100 mb-2" onClick={handleLogin}>
                Log In
            </Button>
            <p color='white' className="text-center my-2">OR</p>
            <GoogleAuth />
        </Stack>      
        
    </Form> 
    </>
  );
}