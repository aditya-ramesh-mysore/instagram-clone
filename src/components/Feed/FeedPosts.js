import React from 'react';
import FeedPost from './FeedPost';
import { Stack } from 'react-bootstrap';

export default function FeedPosts() {
    return (
        
            <Stack direction='vertical' gap={3} style={{marginTop: "15px"}}>
                <div className='d-flex flex-column align-items-center'>
                    <FeedPost username={"Random"} image={"/images/img1.png"} avatar={"/images/img1.png"}/>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <FeedPost username={"Random"} image={"/images/img1.png"} avatar={"/images/img1.png"}/>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <FeedPost username={"Random"} image={"/images/img1.png"} avatar={"/images/img1.png"}/>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <FeedPost username={"Random"} image={"/images/img1.png"} avatar={"/images/img1.png"}/>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <FeedPost username={"Random"} image={"/images/img1.png"} avatar={"/images/img1.png"}/>
                </div>
              
            </Stack>
        
    );
}
