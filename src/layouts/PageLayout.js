import React from 'react';
import {useLocation} from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import { Col, Container, Row } from 'react-bootstrap';

export default function PageLayout({children}) {
    const {pathName} = useLocation()
    return ( <> {
        pathName === "/auth"
            ? <AuthPage/>
            : (
                <React.Fragment>
                    <Container fluid>
                        <Row>
                            <Col lg={2} style={{height: "100vh", backgroundColor: "black"}}>
                                <h1> Sidebar</h1>
                            </Col>
                            <Col>
                                <h1>Main content</h1>
                            </Col>
                        </Row>
                        
                    </Container>
                    {children}
                </React.Fragment>
            )
    } </>
  );
}