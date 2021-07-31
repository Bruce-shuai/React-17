import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Button, Dropdown, Menu } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import store, { RootState } from '../../redux/store';
import { GlobalOutlined } from '@ant-design/icons';
import { withTranslation, WithTranslation } from 'react-i18next';
import {addLanguageActionCreator, changeLanguageActionCreator} from '../../redux/language/languageActions';
import { connect } from 'react-redux';   // 尽管connect没有用with开头，也是hoc
import { Dispatch } from 'redux';

// 这里的参数state 其实就是来自store的数据
const mapStateToProps = (state: RootState) => {
  return {   // 返回的是一个对象
    language: state.language,
    languageList: state.languageList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {   // 返回的是一个对象
    changeLanguage: (language: 'zh' | 'en') => {
      const action = changeLanguageActionCreator(language);
      dispatch(action)
    },
    addLanguage: (language: string, name: string) => {
      const action = addLanguageActionCreator(language, name);
      dispatch(action);
    }
  }
}

// 这里对于ts的掌握要有一定的深度才行啊
type PropsType = RouteComponentProps &   // react-router 路由props类型
WithTranslation &  // i18n props 类型
ReturnType<typeof mapStateToProps> &     // redux store 隐射类型
ReturnType<typeof mapDispatchToProps>;   // redux dispatch 映射类型 

// 这里的& 用得有点厉害
class HeaderComponent extends React.Component<PropsType> {

  handleMenuClick(e) {
    console.log('click', e);
    if (e.key === 'new') {
      this.props.addLanguage('new', 'new_language')  
    } else {
      this.props.changeLanguage(e.key)
    }
  }
  render() {

    console.log('classState', this.state);
    const menu =  <Menu onClick={this.handleMenuClick}>
    {
      this.props.languageList.map((item) => {
        return <Menu.Item key={item.language}>{item.name}</Menu.Item>
      })
    }
    <Menu.Item key='new'>添加新语言</Menu.Item>
  </Menu>

    const {history, t} = this.props;   // 注意：使用解构 是在函数内部使用，直接在class是不能这么做的
    return (
      <>
      <div className={styles['header-top']}>
            <div className={styles['header-top-left']}>
              <Typography.Text>{t('header.slogan')}</Typography.Text>
              <Dropdown.Button overlay={menu} icon={<GlobalOutlined />}>{this.props.language === 'zh' ? '中文' : 'English'}</Dropdown.Button>
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
}

// 为什么是withTranslation 来嵌套withRouter 而不是 withRouter 来嵌套withTranslation呢？
export const Header =connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HeaderComponent))); 