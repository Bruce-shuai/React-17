import React from 'react';
import { Row, Col, Image } from 'antd';
import { ProductImage } from './ProductImage';
import styles from './ProductCollection.module.css';
interface Props {
  productList: any[];
  sideSrc: string;
}

export const ProductCollection: React.FC<Props> = ({productList, sideSrc}) => {
  return <div className={styles['product-collection']}>
    <Image src={sideSrc} className={styles['side-img']}></Image>
    <div>
      <Row>
        <Col><ProductImage size='big' product={productList[0]}/></Col>
        <Col>
          <Row><ProductImage size='small' product={productList[1]}/></Row>
          <Row><ProductImage size='small' product={productList[2]}/></Row>
        </Col>
        <Col>
          <Row><ProductImage size='small' product={productList[3]}/></Row>
          <Row><ProductImage size='small' product={productList[4]}/></Row>
        </Col>
      </Row>
      <Row>
        <Col><ProductImage size='small' product={productList[5]}/></Col>
        <Col><ProductImage size='small' product={productList[6]}/></Col>
        <Col><ProductImage size='small' product={productList[7]}/></Col>
        <Col><ProductImage size='small' product={productList[8]}/></Col>
      </Row>
    </div>
  </div>
}