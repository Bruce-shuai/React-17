import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
export const Header:React.FC = () => {
  function handleMenuClick(e) {
    console.log('click', e);
  }
  
  const menu =  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">中文</Menu.Item>
    <Menu.Item key="2">英文</Menu.Item>
  </Menu>

  return (
    <>
    <div className={styles['header-top']}>
          <div className={styles['header-top-left']}>
            <Typography.Text>让旅行更有意义</Typography.Text>
            <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>语言</Dropdown.Button>
          </div> 
          <Button.Group className={styles['header-top-right']}>
            <Button>注册</Button>
            <Button>登录</Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles['header']}>
        <div className={styles['header-main']}>
          <img src={logo} className={styles['App-logo']} alt="logo" /> 
          <Typography.Title level={4} className={styles['header-title']}>携程旅游网</Typography.Title>
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

