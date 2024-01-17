import React from 'react'
import IconButton from './IconButton'
import UserProfile from './UserProfile'
import { Flex } from 'antd'

export default function User() {
  return (
    <Flex style={{ marginLeft: 'auto', height: '40px' }} align='center'>
      <IconButton img='../../assets/img/icons/email.svg'></IconButton>
      <IconButton img='../../assets/img/icons/bell.svg'></IconButton>
      <UserProfile></UserProfile>
    </Flex>

  )
}
