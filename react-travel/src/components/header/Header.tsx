import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd';
import { useHistory } from "react-router-dom";
import { GlobalOutlined } from '@ant-design/icons';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions';
import { useTranslation } from 'react-i18next';

export const Header:React.FC = () => {
  const history = useHistory();
  const language = useSelector((state) => state.language)
  const languageList = useSelector((state) => state.languageList)
  const {t} = useTranslation();
  const dispatch = useDispatch();

  function handleMenuClick(e) {
    if (e.key === 'new') {
      dispatch(addLanguageActionCreator('新语言', 'new-language'))
    } else {
      dispatch(changeLanguageActionCreator(e.key))
    }
  }
  
  const menu =  <Menu onClick={handleMenuClick}>
    {
      languageList.map((item) => {
        return <Menu.Item key={item.language}>{item.name}</Menu.Item>
      })
    }
    <Menu.Item key='new'>添加新语言</Menu.Item>
  </Menu>

  return (
    <>
      <div className={styles['header-top']}>
            <div className={styles['header-top-left']}>
              <Typography.Text>{t('header.slogan')}</Typography.Text>
              <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>{language === 'zh' ? '中文' : 'English'}</Dropdown.Button>
            </div> 
            <Button.Group className={styles['header-top-right']}>
              <Button onClick={() => history.push('register')}>{t('header.register')}</Button>
              <Button onClick={() => history.push('signIn')}>{t('header.signin')}</Button>
            </Button.Group>
          </div>
          <Layout.Header className={styles['header']}>
          <div className={styles['header-main']}>
            <img src={logo} className={styles['App-logo']} alt="logo" onClick={() => history.push('/')}/> 
            <Typography.Title level={4} className={styles['header-title']} onClick={() => history.push('/')}>{t('header.title')}</Typography.Title>
            <Input.Search placeholder="请输入旅游目的地、主题、或关键字" className={styles['header-search']}/>
          </div> 
          </Layout.Header>
          <Menu className={styles['header-bottom']} mode={'horizontal'}>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.home_page')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.weekend')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.group')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.backpack')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.private')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.cruise')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.hotel')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.local')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.theme')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.custom')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.study')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.visa')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.enterprise')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.high_end')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.outdoor')}</Menu.Item>
            <Menu.Item className={styles['header-bottom-btn']}>{t('header.insurance')}</Menu.Item>
          </Menu>
    </>
  )
}

