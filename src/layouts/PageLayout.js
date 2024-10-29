import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import {Col, Container, Row} from 'react-bootstrap';
import SideBar from '../components/SideBar/SideBar';
import HomePage from '../pages/HomePage/HomePage';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase/firebase';
import { useSelector } from 'react-redux';

export default function PageLayout({children}) {
    const user = useSelector((state) => state.auth.user)

    return ( <> 
    <Container fluid>
        <Row >
            {user
                ? <Col
                        lg={2}
                        style={{
                        backgroundColor: "black"
                    }}>
                        <SideBar/>
                    </Col>
                : null}

            <Col style={{
                backgroundColor: "black"
            }}>
                {children}
            </Col>
        </Row>

    </Container> 
    </>
  );
}