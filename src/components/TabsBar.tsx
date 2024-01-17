import React from 'react'
import { Flex, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BtnGroup from './BtnGroup';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Description',

  },
  {
    key: '2',
    label: 'Board',

  },
  {
    key: '3',
    label: 'Notes',

  },
  {
    key: '4',
    label: 'Table',

  },
];

export default function TabsBar() {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Flex align='center' style={{ padding: '22px 44px 0px 27px' }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ marginBottom: '-18px'}} itemSelectedColor='#6E6AF0'/>
      <BtnGroup></BtnGroup>
    </Flex>
  )
}
