import React from 'react';
import { Button, Col, Image, Row, Stack } from 'react-bootstrap';

export default function ProfilePageHeader() {
  return (
    <>
        <div className="d-flex align-items-center mb-4" style={{margin: "70px"}}>
            <Image
              src="/images/img1.png"
              roundedCircle
              alt="Profile Avatar"
              className="me-3"
              style={{ width: '100px', height: '90px' }}
            />
            <div>
              <Row>
                <Col>
                  <h4 className="text-light">asaprogrammer_</h4>
                </Col>
                <Col>
                  <Button size='sm' variant="outline-light" className="me-3">Edit Profile</Button>
                </Col>
              </Row>

              <Row>
                <Stack direction='horizontal' gap={3}>
                  <span style={{color: "grey"}}>4 Posts</span>
                  <span style={{color: "grey"}}>149 Followers</span>
                  <span style={{color: "grey"}}>168 Following</span>
                </Stack>
                
              </Row>
            
              <p style={{color: "grey"}}>Aditya</p>
              <p className="text-light">Tutorials that are meant to level up your skills as a programmer.</p>
            </div>
        </div>
    </>
  );
}
