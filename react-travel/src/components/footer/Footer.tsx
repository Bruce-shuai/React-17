import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './Footer.module.css';
import facebook from '../../assets/images/facebook-807588_640.png';
import instagram from '../../assets/images/follow-826033_640.png';
import youtube from '../../assets/images/icon-720944_640.png';
import Microsoft from '../../assets/images/microsoft-80658_640.png';
import { useTranslation} from 'react-i18next';


export const Footer:React.FC = () => {
  const {t} = useTranslation();
  return <>
    <Layout.Footer className={styles.AppFooter}>
      <div className={styles['cooperative-enterprise']}>
        <img src={Microsoft} className={styles.enterprise} />
        <img src={youtube} className={styles.enterprise} />
        <img src={instagram} className={styles.enterprise} />
        <img src={facebook} className={styles.enterprise} />
      </div>
      <Typography.Title level={3} className={styles['footer-title']}>{t("footer.detail")}</Typography.Title>
    </Layout.Footer>
  </>
}

