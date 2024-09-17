import React from 'react';
import { Image, Stack } from 'react-bootstrap';


export default function ImagesDisplay() {
  return (
    <>
        <Stack direction='horizontal' gap={5}>
            <Image src='/images/playstore.png' style={{width: 150, height: 60}} />
            <Image src='/images/microsoft.png'  style={{width: 150, height: 60}}  />
        </Stack> 
    </>
  );
}
