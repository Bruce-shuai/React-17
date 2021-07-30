import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { store } from '../../redux/store';
// import { useHistory, useLocation, useParams } from "react-router-dom";
import { GlobalOutlined } from '@ant-design/icons';

interface State {
  language: 'zh' | 'en';   
  languageList: {name: string, language: string}[]
}

class HeaderComponent extends React.Component<RouteComponentProps, State> {

  constructor(props) {
    super(props);
    const storeState = store.getState();
    // 这里是给state提供初始值
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList
    }
    console.log('constructor');
    
    // 有一个问题，为什么订阅要放在constructor这个函数里？  尽管subscribe是放在constructor里的，但是多次执行subscribe，也不会执行constructor是怎么回事呢？
    store.subscribe(() => {
      const storeState = store.getState();
      console.log('subscribe');
      this.setState({
        language: storeState.language,
        languageList: storeState.languageList
      })
    })
  }

  handleMenuClick(e) {
    console.log('click', e);
    if (e.key === 'new') {
      const action = {type: 'add_language', payload: {name: 'new_language', language: 'new'}};
      store.dispatch(action);
    } else {
      const action = {type: 'change_language', payload: e.key};
      store.dispatch(action);
    }
  }
  
  // history: { history } = this.props;
  render() {

    console.log('classState', this.state);
    


    // 这种声明变量，就在函数中声明才是对的，别在class中直接声明，有错误的
    const menu =  <Menu onClick={this.handleMenuClick}>
    {
      this.state.languageList.map((item) => {
        return <Menu.Item key={item.language}>{item.name}</Menu.Item>
      })
    }
    <Menu.Item key='new'>添加新语言</Menu.Item>
  </Menu>

    const {history} = this.props;   // 注意：使用解构 是在函数内部使用，直接在class是不能这么做的
    return (
      <>
      <div className={styles['header-top']}>
            <div className={styles['header-top-left']}>
              <Typography.Text>让旅行更有意义</Typography.Text>
              <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>{this.state.language === 'zh' ? '中文' : 'English'}</Dropdown.Button>
            </div> 
            <Button.Group className={styles['header-top-right']}>
              <Button onClick={() => history.push('register')}>注册</Button>
              <Button onClick={() => history.push('signIn')}>登录</Button>
            </Button.Group>
          </div>
          <Layout.Header className={styles['header']}>
          <div className={styles['header-main']}>
            <img src={logo} className={styles['App-logo']} alt="logo" onClick={() => history.push('/')}/> 
            <Typography.Title level={4} className={styles['header-title']} onClick={() => history.push('/')}>携程旅游网</Typography.Title>
            <Input.Search placeholder="请输入旅游目的地、主题、或关键字" className={styles['header-search']}/>
          </div> 
          </Layout.Header>
          <Menu className={styles['header-bottom']} mode={'horizontal'}>
            <Menu.Item className={styles['header-bottom-btn']}>旅游首页</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>周末游</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>跟团游</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>自由行</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>私家团</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>邮轮</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>酒店+景点</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>当地玩乐</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>主题游</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>定制游</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>游学</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>签证</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>企业游</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>高端游</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>爱玩户外</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>保险</Menu.Item>
          </Menu>
    </>
    )
  }
}

export const Header = withRouter(HeaderComponent);