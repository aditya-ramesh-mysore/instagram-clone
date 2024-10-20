import React from 'react';
import { Button, Image, Spinner } from 'react-bootstrap';
import useLogout from '../../hooks/useLogout';

export default function ProfileHeader() {
    const {logOut, loading, error} = useLogout()

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
            <Button variant="outline-primary" className="ms-auto text-primary" onClick={() => logOut()}>
                {loading ? <Spinner /> : null}
                Log out
            </Button>
        </div>
    );
}
