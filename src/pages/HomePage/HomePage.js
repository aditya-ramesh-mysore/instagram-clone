import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { Col, Container, Row } from 'react-bootstrap';
import FeedPosts from '../../components/Feed/FeedPosts';
import ProfileHeader from '../../components/ProfileHeader.js/ProfileHeader';


export default function HomePage() {
  return (
    <Container >
      <Row >
        <Col sm={{span: 9}}>
          <FeedPosts />
        </Col>
        <Col sm={{span: 3}} style={{marginTop: "15px"}}>
          <ProfileHeader />
        </Col>
      </Row>
    </Container>
  );
}
