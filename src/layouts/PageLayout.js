import React from 'react';
import {useLocation} from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/SideBar/SideBar';

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
                            <Col lg={2} style={{height: "100vh", backgroundColor: "black"}}>
                                <SideBar />
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