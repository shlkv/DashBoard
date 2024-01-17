import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import DashboardBoard from './DashboardBoard'

// const tasks = [
//   {
//     id:0,
//     status: '🆕 New',
//     title: 'AST Builder',
//     description: 'Create an Abstract Syntax Tree using tokens and TreeSitte',
//     priority: ['Must, Medium'],
//     executor: 'RED'
//   },
//   {
//     id:1,
//     status: '🏗 In progress',
//     title: 'AST Builder',
//     description: 'Create an Abstract Syntax Tree using tokens and TreeSitte',
//     priority: ['Must, Medium'],
//     executor: 'RED'
//   },
//   {
//     id:2,
//     status: '👀 Review',
//     title: 'AST Builder',
//     description: 'Create an Abstract Syntax Tree using tokens and TreeSitte',
//     priority: ['Must, Medium'],
//     executor: 'RED'
//   },
//   {
//     id:3,
//     status: '✅ Done',
//     title: 'AST Builder',
//     description: 'Create an Abstract Syntax Tree using tokens and TreeSitte',
//     priority: ['Must, Medium'],
//     executor: 'RED'
//   },
//   {
//     id:4,
//     status: '👀 Review',
//     title: 'AST Builder',
//     description: 'Create an Abstract Syntax Tree using tokens and TreeSitte',
//     priority: ['Must, Medium'],
//     executor: 'RED'
//   },
//   {
//     id:5,
//     status: '👀 Review',
//     title: 'AST Builder',
//     description: 'Create an Abstract Syntax Tree using tokens and TreeSitte',
//     priority: ['Must, Medium'],
//     executor: 'RED'
//   },

// ]


export default function DashBoard() {
  return (
    <div>
      <DashBoardHeader></DashBoardHeader>
      <DashboardBoard></DashboardBoard>
    </div>
  )
}
