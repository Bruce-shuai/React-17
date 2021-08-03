import React from 'react';
import styles from './MainLayout.module.css';
import { Header, Footer } from '../../components';
export const MainLayout: React.FC = ({children}) => {
  return <>
    <Header />
    {/* 页面内容 */}
     {/* 用好children!! 可以在react 官网找 */}
     {children}    
    <Footer />
  </>
}