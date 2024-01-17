
import { Flex } from 'antd'
import React from 'react'
import { useState } from 'react';

type IconType = {
  img:string,
  text?:string
}


export default function Icon({ img, text }:IconType ) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      style={{ width: "100%", border: '1px solid #F7F7F7', backgroundColor: isHovering ? '#6E6AF0' : 'transparent', marginBottom: '15px', borderRadius: '10px', padding: '6px 8px'}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Flex  justify='start' align='center' horizontal>
        <img src={img} alt='text' />
        <p style={{marginLeft: '10px'}}>{text}</p>
      </Flex>
    </button>
  )
}
