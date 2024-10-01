import React from 'react';
import { Col, Nav, Row, Stack } from 'react-bootstrap';

export default function SideBarItem({children, logoText}) {
    return ( <> 
    <Nav.Item className="mb-3">
        <Nav.Link href="#" className="text-light d-flex align-items-center">
            <Row style={{width: "80%"}} >
                <Col lg={{
                    span: 3
                }}>
                    {children}
                </Col>
                <Col lg={{
                    span: 3
                }}>
                    {logoText}
                </Col>
            </Row>
        </Nav.Link> 
    </Nav.Item>
    </>
  );
}