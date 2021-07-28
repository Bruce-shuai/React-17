import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './Footer.module.css';
export const Footer:React.FC = () => {
  return <>
    <Layout.Footer className={styles.AppFooter}>
      <Typography.Title level={2} className={styles['footer-title']}>版权所有@携程旅游网</Typography.Title>
    </Layout.Footer>
  </>
}

