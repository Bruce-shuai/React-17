import React, { useState, useEffect } from 'react';
import logo from './assets/imgs/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';  // 似乎还不能把mockdata文件夹放在src文件夹外，不然还访问不到
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

// 一下子就将函数组件转变为类组件了！(记录一下，有哪些变化)
const App:React.FC = () => {

  // 这是数组解构的方法
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  useEffect(() => {
    document.title = `已点击${count}次`;
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').
    then(response => response.json()).
    then(data => setRobotGallery(data));
  }, [])
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="react-logo" />
        <h1>罗伯特吊炸天机器人</h1>
      </div>
      <button
        onClick={() => {setCount(count + 1)}}
      >
        <span>count: {count}</span>
      </button>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotGallery.map(robot => {
          return <Robot id={robot.id} email={robot.email} name={robot.name}/>
        })}
      </div>
    </div>
  );
}

export default App;
