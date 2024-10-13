import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { Col, Container, Row } from 'react-bootstrap';
import FeedPosts from '../../components/Feed/FeedPosts';
import ProfileHeader from '../../components/SuggestedUsers/ProfileHeader';
import Suggestions from '../../components/SuggestedUsers/Suggestions';


export default function HomePage() {
  return (
    <Container >
      <Row >
        <Col sm={{span: 9}}>
          <FeedPosts />
        </Col>
        <Col sm={{span: 3}} style={{marginTop: "15px"}}>
          <Suggestions />
        </Col>
      </Row>
    </Container>
  );
}
