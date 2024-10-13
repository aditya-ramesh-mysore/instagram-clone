import React from 'react';
import ProfileHeader from './ProfileHeader';
import { ListGroup } from 'react-bootstrap';
import Suggestion from './Suggestion';

export default function Suggestions() {
    return ( 
    <> 
        <ProfileHeader/>
        <h6 className="mb-3" style={{color: "grey"}}>Suggested for you</h6>
        <ListGroup>
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </ListGroup>
        <p style={{ color:"grey", fontSize: '0.8em' }}>© 2024 Built By Aditya</p>
    </>
  );
}