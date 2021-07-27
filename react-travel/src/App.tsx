import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
function App() {

  function handleMenuClick(e) {
    console.log('click', e);
  }
  
  const menu =  <Menu onClick={handleMenuClick}>
  <Menu.Item key="1">1st item</Menu.Item>
  <Menu.Item key="2">2nd item</Menu.Item>
  <Menu.Item key="3">3rd item</Menu.Item>
</Menu>


  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Layout.Header className={styles['header']}>
          <div className={styles['header-top']}>
            <div className={styles['header-top-left']}>
              <Typography.Text>让旅行更有意义</Typography.Text>
              <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>语言</Dropdown.Button>
            </div> 
            <div className={styles['header-top-right']}>
              <Button>注册</Button>
              <Button>登录</Button>
            </div>
          </div>
          <div className={styles['header-main']}>
            <img src={logo} className={styles['App-logo']} alt="logo" /> 
            <Typography.Title level={4} className={styles['header-title']}>携程旅游网</Typography.Title>
            <Input.Search placeholder="请输入旅游目的地、主题、或关键字" className={styles['header-search']}/>
          </div> 
          <div className={styles['header-bottom']}>
            <Button type="text" className={styles['header-bottom-btn']}>旅游首页</Button>
            <Button type="text" className={styles['header-bottom-btn']}>周末游</Button>
            <Button type="text" className={styles['header-bottom-btn']}>跟团游</Button>
            <Button type="text" className={styles['header-bottom-btn']}>自由行</Button>
            <Button type="text" className={styles['header-bottom-btn']}>私家团</Button>
            <Button type="text" className={styles['header-bottom-btn']}>邮轮</Button>
            <Button type="text" className={styles['header-bottom-btn']}>酒店+景点</Button>
            <Button type="text" className={styles['header-bottom-btn']}>当地玩乐</Button>
            <Button type="text" className={styles['header-bottom-btn']}>主题游</Button>
            <Button type="text" className={styles['header-bottom-btn']}>定制游</Button>
            <Button type="text" className={styles['header-bottom-btn']}>游学</Button>
            <Button type="text" className={styles['header-bottom-btn']}>签证</Button>
            <Button type="text" className={styles['header-bottom-btn']}>企业游</Button>
            <Button type="text" className={styles['header-bottom-btn']}>高端游</Button>
            <Button type="text" className={styles['header-bottom-btn']}>爱玩户外</Button>
            <Button type="text" className={styles['header-bottom-btn']}>保险</Button>
          </div>
        </Layout.Header>
      </header>
      <footer className={styles.AppFooter}>
        <Layout.Footer>
          <Typography.Title level={2} className={styles['footer-title']}>版权所有@携程旅游网</Typography.Title>
        </Layout.Footer>
      </footer>
    </div>
  );
}

export default App;
