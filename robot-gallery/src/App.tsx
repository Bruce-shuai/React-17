import React from 'react';
import logo from './assets/imgs/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';  // 似乎还不能把mockdata文件夹放在src文件夹外，不然还访问不到
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

interface Props {

}

interface State {
  robotGallery: any[]
}

// 一下子就将函数组件转变为类组件了！(记录一下，有哪些变化)
class App extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount() {
    // fetch方法，返回的是Promise对象
    fetch('https://jsonplaceholder.typicode.com/users').
    then(response => response.json()).      // 这里的json()是用来获取json数据的
    then(data => this.setState({
      robotGallery: data
    }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="react-logo" />
          <h1>罗伯特吊炸天机器人</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(robot => {
            return <Robot id={robot.id} email={robot.email} name={robot.name}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
