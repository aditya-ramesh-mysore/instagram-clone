import React from 'react';
import { Button, Image } from 'react-bootstrap';

export default function GoogleAuth() {
  return (
    <>
        <Button variant="outline-info" className="w-100 mb-2">
            <Image src='/images/google.png' width={20} height={20} className="me-2" />
            Log in with Google
        </Button>
    </>
  );
}
