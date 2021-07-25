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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `已点击${count}次`;
  }, [count])

  useEffect(() => {
    // 数据还未请求的时候，处于加载状态
    setLoading(false);
    // 这样在useEffect里面使用 async……await
    // try……catch 是在async内部使用
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();  
        setRobotGallery(data);
      } catch(e) {
        setError(e.message);
      }
      // 获取数据成功后的状态
      setLoading(true);
    }
    fetchData();
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
      {
        (!error || error !== '') && <div>网站错误：{error}</div>
        // !error || <div>网站错误：{error}</div>  // 尽管这个也是可以运行的，但是比上面的还是要差一些
      }
      {
        loading ? 
        <div className={styles.robotList}>
          {robotGallery.map(robot => {
            return <Robot id={robot.id} email={robot.email} name={robot.name}/>
          })}
        </div>
        :
        <div> Loading ...<img src={logo} /></div> 
      }   
    </div>
  );
}

export default App;
