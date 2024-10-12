import React from 'react';
import { Button, Image } from 'react-bootstrap';

export default function ProfileHeader() {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4" >
            <div>
                <Image
                    src="/images/img1.png"
                    roundedCircle
                    alt="User Avatar"
                    className="me-3"
                    style={{
                    width: "35px",
                    height: "35px"
                }}/>
                <span style={{color: "white"}} >asaprogrammer_</span>
            </div>
            <Button variant="outline-primary" className="ms-auto text-primary">
                Log out
            </Button>
        </div>
    );
}
