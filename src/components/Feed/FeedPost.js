import React, { useState } from 'react';
import { Image, Stack } from 'react-bootstrap';
import FeedPostLikes from './FeedPostLikes';
import FeedPostComments from './FeedPostComments';
import FeedPostHeader from './FeedPostHeader';
import FeedLikeButton from './FeedLikeButton';
import FeedCommentForm from './FeedCommentForm';
import { CommentLogo } from '../../assets/constants';


export default function FeedPost({username, image, avatar}) {

  const [commentEnabled, setCommentEnabled] = useState(false)
  const [liked, setliked] = useState(false)

  return (
    <div style={{width: "50%", height: "50%"}}>
        <FeedPostHeader username={username} avatar={avatar}/>
        <Image fluid className="mb-3" src={image} />

        <Stack direction='horizontal' gap={3}>
          <div onClick={() => setliked(prev => !prev)}>
            <FeedLikeButton liked={liked} />
          </div>
          
          <div onClick={() => setCommentEnabled(prev => !prev)}>
            <CommentLogo />
          </div>  
        </Stack>

        <FeedPostLikes/>
        <FeedPostComments />

        {commentEnabled ? <FeedCommentForm /> : null}
    </div>
  );
}
