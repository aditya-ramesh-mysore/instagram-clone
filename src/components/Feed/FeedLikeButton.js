import React from 'react';
import { NotificationsLogo, UnlikeLogo } from '../../assets/constants';

export default function FeedLikeButton({liked }) {
  return (
    <>
        {liked ? <UnlikeLogo /> : <NotificationsLogo />}
    </>
    
  );
}
