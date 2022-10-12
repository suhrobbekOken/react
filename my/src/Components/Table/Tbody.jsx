import React from 'react'

const Tbody = ({item}) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.last}</td>
        <td>{item.password}</td>
      </tr>
     
    </tbody>
  )
}

export default Tbody