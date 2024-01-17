import React from 'react'
import IconButton from './IconButton'
import { Flex } from 'antd'

const navLinks = [
  {
    id: 1,
    link: '#',
    img: "../../assets/img/icons/sideNav/grid-1.svg",
    imgHover:"../../assets/img/icons/sideNav/grid-1-active.svg"
  },
  {
    id: 2,
    link: '#',
    img: "../../assets/img/icons/sideNav/grid-2.svg",
    imgHover:"../../assets/img/icons/sideNav/grid-2-active.svg"
  },
  {
    id: 3,
    link: '#',
    img: "../../assets/img/icons/sideNav/Documents.svg",
    imgHover:"../../assets/img/icons/sideNav/Documents-active.svg"
  },
  {
    id: 4,
    link: '#',
    img: "../../assets/img/icons/sideNav/shopping-basket-handy.svg",
    imgHover:"../../assets/img/icons/sideNav/shopping-basket-handy-active.svg"
  },
  {
    id: 5,
    link: '#',
    img: "../../assets/img/icons/sideNav/Chat.svg",
    imgHover:"../../assets/img/icons/sideNav/Chat-active.svg"
  },
  {
    id: 6,
    link: '#',
    img: "../../assets/img/icons/sideNav/Moon.svg",
    imgHover:"../../assets/img/icons/sideNav/Moon-active.svg"
  },
]

export default function SideNav() {

  return (
    <Flex style={{padding:'16px 8px 27px 8px', height:'100%'}} justify='space-between' align='center' vertical>
      <img src="../../assets/img/icons/logo.svg" alt="logo" />
      <Flex gap="large" style={{ margin: '45px 0 auto 0'}} justify='center' align='center' vertical>
        {navLinks.map((el)=>
        <IconButton key={el.id} img={el.img} imgHover={el.imgHover} link={el.link} ></IconButton>)}
      </Flex>
      <IconButton img="../../assets/img/icons/sideNav/Trash.svg" link='#' />
    </Flex>
  )
}
