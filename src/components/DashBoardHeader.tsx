import React from 'react'
import ProgressBar from './ProgressBar'
import TabsBar from './TabsBar'

export default function DashBoardHeader() {
  return (
    <div style={{ background: '#FFF' }}>
      <ProgressBar></ProgressBar>
      <TabsBar></TabsBar>
    </div>
  )
}
