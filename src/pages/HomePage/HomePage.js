import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import { Col, Container, Row } from 'react-bootstrap';
import FeedPosts from '../../components/Feed/FeedPosts';


export default function HomePage() {
  return (
    <Container >
      <Row>
        <Col sm={{span: 9}}>
          <FeedPosts />
        </Col>
        <Col sm={{span: 3}}>
          <h2 style={{color: "white"}}>Suggested People</h2>
          <h2 style={{color: "white"}}>Suggested People</h2>
          <h2 style={{color: "white"}}>Suggested People</h2>
          <h2 style={{color: "white"}}>Suggested People</h2>
        </Col>
      </Row>
    </Container>
  );
}
