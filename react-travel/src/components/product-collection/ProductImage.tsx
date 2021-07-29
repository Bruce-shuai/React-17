import React from 'react';
import { Image, Typography } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './ProductCollection.module.css';
// 在ts中要使用withRouter，参数类型需要继承RouteComponentProps类型定义
interface Props extends RouteComponentProps{
  size: string;
  product: {
    id: number;
    title: string;
    price: string;
    touristRoutePictures: [
      {
        url: string;
      }
    ]
  }
}

const ProductImageComponent:React.FC<Props> = ({size, product, history}) => {
  return <div className={styles.product} onClick={() => history.push(`detail/${product.id}`)}>
    {
      size === 'big' ? 
      <Image className={styles['big-img']} src={product.touristRoutePictures[0].url}/> : 
      <Image className={styles['small-img']} src={product.touristRoutePictures[0].url}/>
    }
    <div className={size === 'big' ? '' :  styles.words}>
    <Typography.Text>{product.title.slice(0, 15)}</Typography.Text>
    <Typography.Text type='danger'>{`￥${product.price}起`}</Typography.Text>
    </div>
  </div>
}

export const ProductImage = withRouter(ProductImageComponent);