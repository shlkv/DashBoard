import React from 'react'
import { useState } from 'react';

type IconButtonType = {
  img: string,
  imgHover?: string,
  link?: string,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
}

export default function IconButton({ img, link, imgHover }:IconButtonType) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

  };

  return (
    <>
      <a href={link}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{
            height: '48px',
            lineHeight: '38px' ,
            padding: '10px',
            borderRadius: "8px",
            backgroundColor: isHovering ? '#EEF1FF' : '',
          }}>
        <img src={isHovering ? (imgHover ?? img) : img}  alt={img} />
      </a>
    </>
  )
}
