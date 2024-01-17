import React from 'react'
import { Flex, Progress, Avatar, Tooltip, Button  } from 'antd';

export default function ProgressBar() {
  return (
    <Flex align='center' style={{ padding: '22px 44px 14px 27px' }}>
        <img src='../../assets/img/icons/town-icon-BIG.png' alt='' />
        <Flex style={{ width: 400, margin: ' 0 auto 0 10px' }} align='center'>
          <Progress percent={68} strokeColor={'#6E6AF0'}  format={(percent:number) => `${percent}% complete`}/>
        </Flex>
        <Avatar.Group maxCount={4} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          <Avatar src="../../assets/img/avatars/ava1.png" />
          <Avatar src="../../assets/img/avatars/ava2.png" />
          <Avatar src="../../assets/img/avatars/ava3.png" />
          <Avatar src="../../assets/img/avatars/ava4.png" />
          <Avatar src="../../assets/img/avatars/ava3.png" />
          <Avatar src="../../assets/img/avatars/ava4.png" />
          <Tooltip title="Ant User" placement="top">
            <Avatar src="../../assets/img/avatars/ava2.png" />
          </Tooltip>
        </Avatar.Group>
        <Button style={{ backgroundColor: '#6E6AF0', color: '#FFF', marginLeft: '15px' }}>
          + Add board
        </Button>
    </Flex>
  )
}

