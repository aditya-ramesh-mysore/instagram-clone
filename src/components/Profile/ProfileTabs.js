import React from 'react';
import { Col, Image, Row, Tab, Tabs } from 'react-bootstrap';
import "./Profile.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';


export default function ProfileTabs() {
  const data = [
     "/images/img1.png",
     "/images/img2.png",
     "/images/img3.png",
     "/images/img4.png"
  ]
  return (
    <>
      <Tabs defaultActiveKey="posts" id="profile-tabs" className="mb-3">
        <Tab eventKey="posts" title="Posts">
          <div className="d-flex flex-wrap">
            {data.map((img, index) => (
                <div key={index} className="post-item p-2" style={{ width: '33.33%', aspectRatio: '1/1', overflow: 'hidden' }}>
                  <Image src={img} alt="Post 1" fluid style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  <div className="post-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="text-center text-light">
                      <FavoriteIcon fontSize='small'/>7  
                      <ChatBubbleRoundedIcon fontSize='small' style={{marginLeft: "10px"}}/>7
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Tab>
        <Tab eventKey="saved" title="Saved">
          <p style={{color: "grey"}}>No saved posts yet.</p>
        </Tab>
        <Tab eventKey="likes" title="Likes">
          <p style={{color: "grey"}}>No liked posts yet.</p>
        </Tab>
      </Tabs>
    </>
  );
}
