import React from 'react'
import Tbody from './Tbody'
import Thead from './Thead'

const TableList = ({data}) => {
  return (
    <table class="table">
   <Thead/>
        {data.map((item)=>(
            <Tbody item={item}/>
        ))}
  
  </table>
  )
}

export default TableList