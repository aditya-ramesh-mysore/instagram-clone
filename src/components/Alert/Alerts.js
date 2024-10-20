import React from 'react';
import { Alert } from 'react-bootstrap';

export default function AlertComponent({variant, message, errorHandler}) {
    return (
        <Alert variant={variant} dismissible >
            {message}
        </Alert>
    );
}
