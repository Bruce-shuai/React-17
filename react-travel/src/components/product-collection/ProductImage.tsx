import React from 'react';
import { Image, Typography } from 'antd';
import styles from './ProductCollection.module.css';
interface Props {
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

export const ProductImage:React.FC<Props> = ({size, product}) => {
  return <div className={styles.product}>
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