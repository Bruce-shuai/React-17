import React from 'react';
import logo from './logo.svg';
import './App.css';
import robots from './mockdata/robots.json';  // 似乎还不能把mockdata文件夹放在src文件夹外，不然还访问不到
import Robot from './components/Robot';
function App() {
  return (
    <ul>
      {robots.map(robot => {
        // console.log('robot', robot);
        
        // 为什么这里robot.xx也要用{}来包裹呢？
        return <Robot id={robot.id} email={robot.email} name={robot.name}/>
      })}
    </ul>
  );
}

export default App;
