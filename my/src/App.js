import React, { useState } from 'react';
import './App.css';
import TableList from './Components/Table/TableList';

function App() {
  const [data,setData]=useState([
    {id: 1,name:"Suhrobbek", last: "Xayrullayev", password: "123456789"},
    {id: 2,name:"Muhammadsiddiq  ", last: "blalslsa", password: "123456789"}, 
    {id: 3,name:"Olimjon", last: "Olimjonov" , password: "123456789"},
    {id: 4,name:"shaxzodbek", last: "Xasanov", password: "123456789"},
    {id: 5,name:"Abduvali", last: "Xusanov", password: "123456789"}
  ])``
  return (
    <div className="App">
<TableList data={data}/>
    </div>
  );
}

export default App;
