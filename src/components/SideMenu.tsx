

import React from 'react'


import Icon from './Icon';
import NavAnalytics from './NavAnalytics';

const navBtns = [
  {
    key: '1',
    icon: '../../assets/img/icons/town-icon.png',
    text: 'Building enterprise',
  },
  {
    key: '2',
    icon: '../../assets/img/icons/planet-icon.png',
    text: 'Web platform',
  },
  {
    key: '3',
    icon: '../../assets/img/icons/burger-icon.png',
    text: 'Mac website',
  },
  {
    key: '4',
    icon: '../../assets/img/icons/nails-icon.png',
    text: 'Cosmetic web app',
  },
]

export default function SideMenu() {
  return (
    <>
    <h1>Projects</h1>
    <div>
      {navBtns.map((item)=> <Icon key={item.key} text={item.text} img={item.icon}/>)} 
    </div>
    <NavAnalytics></NavAnalytics>
    </>
  )
}

//        items={{navBtns.map((item)=> {key: Math.random(), icon: <NavBtn text={item.text} img={item.img}}/>)}}

// items={[
//   {
//     key: '2',
//     icon: <VideoCameraOutlined />,

//   },
//   {
//     key: '3',
//     icon: <UploadOutlined />,
//     label: 'nav 3',
//   },
//   {
//     key: '4',
//     icon: <UploadOutlined />,
//     label: 'nav 4',
//   },
// ]}