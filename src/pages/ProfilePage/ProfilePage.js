import React from 'react';
import ProfilePageHeader from '../../components/Profile/ProfilePageHeader';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileTabs from '../../components/Profile/ProfileTabs';

export default function ProfilePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: "black" }}>
        <Container >
            <Row >
                <Col sm={{offset: 2, span: 6}}>
                    <ProfilePageHeader />
                </Col>
            </Row>
            <Row>
                <Col sm={{offset: 1, span: 9}}>
                    <ProfileTabs />
                </Col>
            </Row>
                
        </Container>
    </div>
    
  );
}
