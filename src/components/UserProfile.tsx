import { Flex } from 'antd'
import React from 'react'

export default function UserProfile() {
  return (
    <Flex align='center'>
      <img style={{ height: '42px', marginRight: '10px' }} src='../../assets/img/avatars/ava1.png' alt=''/>
      <div>
        <h4 style={{ margin: '0', lineHeight: '28px' }}>Alexandra C.</h4>
        <p style={{ color: '#959BA3', lineHeight: '0', margin: '6px 0'}}>Admin</p>
      </div>
    </Flex>
  )
}
