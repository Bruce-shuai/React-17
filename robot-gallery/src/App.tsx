import React from 'react';
import logo from './assets/imgs/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';  // 似乎还不能把mockdata文件夹放在src文件夹外，不然还访问不到
import Robot from './components/Robot';
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="react-logo" />
        <h1>罗伯特吊炸天机器人</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map(robot => {
          return <Robot id={robot.id} email={robot.email} name={robot.name}/>
        })}
      </div>
    </div>
  );
}

export default App;
