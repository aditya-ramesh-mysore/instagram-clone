import React from 'react';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants';
import { Col, Nav, Row, Stack } from 'react-bootstrap';
import SideBarItem from './SideBarItem';

export default function SideBar() {
    return ( <> 
    <Nav className="flex-column">
        <Stack direction='vertical' gap={3} style={{marginTop: "5px"}}>
        
        <SideBarItem >
            <InstagramLogo className="me-2"/>
        </SideBarItem>

        <SideBarItem logoText={"Search"} >
            <SearchLogo  className="me-2"/>
        </SideBarItem>

        <SideBarItem logoText={"Notifications"} >
            <NotificationsLogo  className="me-2"/>
        </SideBarItem>

        <SideBarItem logoText={"Create"} >
            <CreatePostLogo  className="me-2"/>
        </SideBarItem>

        <SideBarItem logoText={"Profile"} >
            <InstagramMobileLogo  className="me-2"/>
        </SideBarItem>

        </Stack>
    </Nav> 
    </>
  );
}