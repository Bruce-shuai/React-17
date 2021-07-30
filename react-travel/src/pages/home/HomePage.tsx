import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { Footer, Header, SideMenu, Carousel, ProductCollection } from '../../components';
import { productList1, productList2, productList3 } from './mockup';
import styles from './HomePage.module.css';
import sideImg1 from '../../assets/images/sider_2019_02-04-2.png';
import sideImg2 from '../../assets/images/sider_2019_02-04.png';
import sideImg3 from '../../assets/images/sider_2019_12-09.png';
import { withTranslation, WithTranslation } from 'react-i18next';


class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    const {t} = this.props;   // es6解构要在函数里使用，别在class上直接这么用
    return <>
    <Header />
      {/* 页面主题部分 */}
      <div className={styles.body}>
        <Row>
          <Col span={5} className={styles['body-sidemenu']}><SideMenu /></Col>
          <Col span={16} className={styles['body-carousel']}><Carousel /></Col>
        </Row>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="warning">{t("home_page.hot_recommended")}</Typography.Title>
          </Divider>
          <ProductCollection productList={productList1} sideSrc={sideImg1}/>
        </div>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="danger">{t("home_page.new_arrival")}</Typography.Title>
          </Divider>
          <ProductCollection productList={productList2} sideSrc={sideImg2}/>
        </div>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="success">{t("home_page.domestic_travel")}</Typography.Title>
          </Divider>
          <ProductCollection productList={productList3} sideSrc={sideImg3}/>
        </div>
      </div>
      <Footer />    
  </>
  }
}

export const HomePage = withTranslation()(HomePageComponent);