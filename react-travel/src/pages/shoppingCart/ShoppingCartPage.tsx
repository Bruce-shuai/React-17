import React from 'react';
import { MainLayout } from '../../layouts';
import styles from './ShoppingCart.module.css';
import { Row, Col, Affix } from 'antd';
import { ProductList, PaymentCard } from '../../components';


export const ShoppingCartPage = () => {
  return <MainLayout>
    <Row>
      {/* 购物车清单 */}
      <Col span={16}>
        <div className={styles['product-list-container']}>
          {/* <ProductList /> */}
        </div>
      </Col>
      {/* 支付卡组件 */}
      <Col span={8}>
        <Affix>
          {/* 一个固定的钉子 感觉挺好用的 */}
        <div className={styles["payment-card-container"]}>
          {/* <PaymentCard /> */}
        </div>
        </Affix>
      </Col>
    </Row>
  </MainLayout>
}