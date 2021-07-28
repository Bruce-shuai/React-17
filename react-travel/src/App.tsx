import React from 'react';
import styles from './App.module.css';
import { Row, Col } from 'antd';
import { Footer, Header, SideMenu, Carousel } from './components';

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
      </div>
      <Footer />    
    </div>
  );
}

export default App;
