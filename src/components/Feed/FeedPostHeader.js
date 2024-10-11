import React from 'react';
import { Button, Image } from 'react-bootstrap';


export default function FeedPostHeader({username, avatar}) {
  return (
    <>
      <div className="d-flex align-items-center w-100 mb-3">

          <Image
            src={avatar}
            roundedCircle
            alt="User Avatar"
            className="me-3"
            style={{width: "35px", height: "35px"}}
          />
        
        <div className="text-light">
          <strong>{username}</strong> <span className="text-muted">1w</span>
        </div>
        <Button variant="outline-primary" className="ms-auto text-primary">
          Unfollow
        </Button>
      </div>
    </>
  );
}
