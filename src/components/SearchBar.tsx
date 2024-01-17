import { SearchOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'
import User from './User'

export default function SearchBar() {
  return (
    <Flex align='center'>
      <Flex style={{ background: '#F7F7F7', borderRadius: '6px', width: '225px', padding: '10px 12px', height: '40px' }}>
        {/* <SearchOutlined /> */}
        <button style={{ border: 'none', background: 'transparent' }}>
          <img src='../../assets/img/icons/search.svg' alt='search' style={{ height: '100%' }}/>
        </button>
        <input placeholder='Search' style={{ background: 'transparent', border: 'none', marginLeft: '10px', fontSize: '12px' }}></input>
      </Flex>
      <User></User>
    </Flex>
  )
}
