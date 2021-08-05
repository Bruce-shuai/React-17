import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd';
import { useHistory } from "react-router-dom";
import { GlobalOutlined } from '@ant-design/icons';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions';
import { useTranslation } from 'react-i18next';
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode';
import { userSlice } from '../../redux/user/slice';

// 起别名，自己又来继承别名，这招很厉害
interface JwtPayload extends DefaultJwtPayload {
  username: string   // 对应用户名 email
}


export const Header:React.FC = () => {
  const history = useHistory();
  const language = useSelector((state) => state.language.language)
  const languageList = useSelector((state) => state.language.languageList)
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const jwt = useSelector(state => state.user.token);   // 之后就要对jwt 进行解码了(解码插件：jwt-decode   npm install jwt-decode)
  const [username, setUsername] = useState('');

  const shoppingCartItems = useSelector(state => state.shoppingCart.items)
  const shoppingCartLoading = useSelector(state => state.shoppingCart.loading)

  // 解码jwt
  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt);
      setUsername(token.username);
    }
  }, [jwt])


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

    const onLogout = () => {
      dispatch(userSlice.actions.logOut())   // 这里的点要熟悉熟悉才行
      history.push('/');
      // window.location.reload(false);     // 刷新页面！！ 这一招很厉害啊  这里是不推荐这样使用的，会使redux数据不完整
    }
  return (
    <>
      <div className={styles['header-top']}>
            <div className={styles['header-top-left']}>
              <Typography.Text>{t('header.slogan')}</Typography.Text>
              <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>{language === 'zh' ? '中文' : 'English'}</Dropdown.Button>
            </div> 
            {jwt 
              ? 
              <Button.Group>
                <span>{t("header.welcome")}
                <Typography.Text strong>{username}</Typography.Text>
                </span>
                <Button onClick={() => history.push('/shoppingCart')}>{t("header.shoppingCart")}</Button>
                <Button onClick={onLogout}>{t("header.signOut")}</Button>
              </Button.Group>
              :
              <Button.Group className={styles['header-top-right']}>
              {/* 路由跳转加 / 显示绝对路径，不加就报错 */}
                <Button onClick={() => history.push('/register')}>{t('header.register')}</Button>
                <Button onClick={() => history.push('/signIn')}>{t('header.signin')}</Button>
              </Button.Group>
            }
          </div>
          <Layout.Header className={styles['header']}>
          <div className={styles['header-main']}>
            <img src={logo} className={styles['App-logo']} alt="logo" onClick={() => history.push('/')}/> 
            <Typography.Title level={4} className={styles['header-title']} onClick={() => history.push('/')}>{t('header.title')}</Typography.Title>
            <Input.Search 
            placeholder="请输入旅游目的地、主题、或关键字" 
            className={styles['header-search']}
            onSearch={(keywords) => history.push('/search/' + keywords)}   // onSearch 事件有趣！ 这里是跳转到search页面
            />
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

