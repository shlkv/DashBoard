import React from 'react'
import ColumnTasks from './ColumnTasks'
import { Flex } from 'antd'
import { useQuery, gql } from '@apollo/client';

// enum Statuses  {
//   New ='New',
//   Review = 'Review',
//   InProgress = 'InProgress',
//   Done = 'Done'
// }
// enum Priorities {
//   Must = 'Must',
//   Medium = 'Medium',
//   Huge = 'Huge',
//   Tiny = 'Tiny'
// }
// // 'RED' | 'YELLOW' | 'GREEN' | 'BLUE'

type DashboardBoardType = {
  tasks:{
    id: number,
    status: string,
    title: string,
    description: string,
    priority: string[],
    executor: string
  }[]
}

const GET_STATUSES = gql`
  {
    statuses {
      id
      state
    }
  }
`;

export default function DashboardBoard() {
  const { data } = useQuery(GET_STATUSES);

  let statuses  = []
  if ( data !== undefined ) {
    statuses =  data.statuses
  }

  console.log(statuses)


  // const columns:string[] = tasks.reduce((accumulator:string[], task:Record<string, string>)  => {
  //   if (!accumulator.includes(task.status)) {
  //     accumulator.push(task.state);
  //   }
  //   return accumulator;
  // }, []);

  // console.log([...new Set(columns)])


  return (
    <Flex justify={'space-around'}>
      {statuses.map((el:Record<string, string>)=> <ColumnTasks status={el.state} key={el.id}></ColumnTasks>) }
    </Flex>
  )
}

