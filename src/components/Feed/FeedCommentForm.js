import React from 'react';
import {Button, Form} from 'react-bootstrap';

export default function FeedCommentForm() {
    return (
        <Form className="d-flex w-100">
            <Form.Control
                type="text"
                placeholder="Add a comment..."
                className="me-2 text-white"
                style={{
                border: 'none',
                borderBottom: '2px solid #444',
                borderRadius: '0',
                backgroundColor: 'black',
                padding: '10px'
            }}/>
            <Button variant="outline-primary" size='sm'>Post</Button>
        </Form>
    );
}
