import React, { useState } from 'react';
import './authPage.css';
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';
import LoginForm from '../components/Auth/LoginForm';
import ImagesDisplay from '../components/Auth/ImagesDisplay';
import SignUpForm from '../components/Auth/SignUpForm';
import PageLayout from '../layouts/PageLayout';

export default function AuthPage() {

    const [loginForm, setLoginForm] = useState(() => true)

  return (
    <PageLayout>
    <Container fluid className='d-flex align-items-center justify-content-center min-vh-100' style={{backgroundColor: "black"}}>
        <Row style={{width: "100%"}}>
            <Col md={{span: 3, offset: 3}} className='align-items-center justify-content-center'  >
                <Image fluid src="/images/auth.png" />
            </Col>
            <Col lg={{span: 4}}>
                <Stack gap={3}>
                <Row  style={{border: "1px solid #dbdbdb", borderRadius: "5px", padding: 20}}>
                    <Col lg={{span: 8, offset: 2}}>
                        {loginForm ? <LoginForm /> : <SignUpForm />}
                    </Col>    
                </Row>
                <Row  style={{border: "1px solid #dbdbdb", borderRadius: "5px"}}>
                    <Col  className='d-flex align-items-center justify-content-center' >
                    {loginForm ? 
                        <p>Don't have an account? <span className="auth-page-clickable" onClick={() => setLoginForm(prev => !prev)}>Sign Up</span></p>
                        : 
                        <p >Already have an account? <span className="auth-page-clickable" onClick={() => setLoginForm(prev => !prev)}>Login</span></p>
                    }
                    </Col>
                </Row>
                
                <Row >
                        <p className='d-flex align-items-center justify-content-center'>Get the app.</p>
                </Row>
                <Row >
                    <Col className='d-flex align-items-center justify-content-center'>
                        <ImagesDisplay />
                    </Col>
                </Row>
                </Stack>
                
            </Col>
        </Row>
    </Container>
    </PageLayout>
  );
}
