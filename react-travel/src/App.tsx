import React from 'react';
import styles from './App.module.css';
import { Row, Col, Typography, Divider } from 'antd';
import { Footer, Header, SideMenu, Carousel, ProductCollection } from './components';
import { productList1, productList2, productList3 } from './mockup';
import sideImg1 from './assets/images/sider_2019_02-04-2.png';
import sideImg2 from './assets/images/sider_2019_02-04.png';
import sideImg3 from './assets/images/sider_2019_12-09.png';
const App:React.FC = () => {

  return (
    <div className={styles.App}>
      <Header />
      {/* 页面主题部分 */}
      <div className={styles.body}>
        <Row>
          <Col span={5} className={styles['body-sidemenu']}><SideMenu /></Col>
          <Col span={16} className={styles['body-carousel']}><Carousel /></Col>
        </Row>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="warning">爆款推荐</Typography.Title>
          </Divider>
          <ProductCollection productList={productList1} sideSrc={sideImg1}/>
        </div>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="danger">新品上市</Typography.Title>
          </Divider>
          <ProductCollection productList={productList2} sideSrc={sideImg2}/>
        </div>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="success">国内游推荐</Typography.Title>
          </Divider>
          <ProductCollection productList={productList3} sideSrc={sideImg3}/>
        </div>
      </div>
      <Footer />    
    </div>
  );
}

export default App;
