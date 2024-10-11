import React from 'react';
import {useLocation} from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/SideBar/SideBar';
import HomePage from '../pages/HomePage/HomePage';

export default function PageLayout({children}) {
    const {pathname} = useLocation()
    console.log(pathname);
    return ( <> {
        pathname === "/auth"
            ? <AuthPage/>
            : (
                <React.Fragment>
                    <Container fluid>
                        <Row>
                            <Col lg={2} style={{ backgroundColor: "black"}}>
                                <SideBar />
                            </Col>
                            <Col style={{backgroundColor: "black"}}>
                                {children}
                            </Col>
                        </Row>
                        
                    </Container>
                    
                </React.Fragment>
            )
    } </>
  );
}