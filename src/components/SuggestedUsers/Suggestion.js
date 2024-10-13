import React from 'react';
import { Button, Image, ListGroup } from 'react-bootstrap';

export default function Suggestion() {
    return ( <> 
    <ListGroup.Item
        action
        className="text-light border-0 d-flex align-items-center justify-content-between mb-2"
        style={{backgroundColor: "black"}}>
        <div className="d-flex align-items-center">
            <Image
                src="/images/img2.png"
                roundedCircle
                alt="User Avatar"
                className="me-3"
                style={{
                width: '35px',
                height: '35px'
            }}/>
            <div>
                <strong>Dan Abrahamov</strong>
                <div
                    style={{
                    fontSize: '0.9em',
                    color: "grey"
                }}>1392 followers</div>
            </div>
        </div>
        <Button variant="outline-primary" size='sm' className="text-primary">
            Follow
        </Button>
    </ListGroup.Item> </>
  );
}