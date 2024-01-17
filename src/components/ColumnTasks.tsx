import React from 'react'
import { useQuery, gql } from '@apollo/client';

type ColumnTasksType = {
  status:string,
  // tasks:{
  //   id: number,
  //   status: string,
  //   title: string,
  //   description: string,
  //   priority: string[],
  //   executor: string
  // }[]
}

export default function ColumnTasks({status}:ColumnTasksType) {

  const GET_TASKS = gql`
  {
    tasks(where: { state: "${status}" }) {
      id
      state
      title
      description
      priority
    }
  }
`;
  const { data } = useQuery(GET_TASKS)


  let tasks  = []
  if ( data !== undefined ) {
    tasks =  data.tasks
  }

  console.log(tasks)
  return (
    <div style={{minHeight: '70vh', background: 'white', width:"23%", margin:'15px', textAlign:'center'}}>
      <h1>{status}</h1>
      {tasks.map((el:Record<string, string>)=> <p>{el.title}</p>) }

    </div>
  )
}
