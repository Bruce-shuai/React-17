import React from 'react';
import { Typography, Carousel, Image, Table, Rate } from 'antd';
import styles from './productIntro.module.css';
interface PropsType {
  title: string,
  shortDescription: string,
  price: string | number,
  coupons: string,
  points: string,
  rating: number | undefined,
  pictures: string[],
  discount: string | number 
}


export const ProductIntro: React.FC<PropsType> = ({
  title,
  shortDescription,
  price,
  coupons,
  points,
  rating,
  pictures,
  discount
}) => {
  
  const columns = [{
    title: 'title',
    dataIndex: 'title',
    key: 'title'
  }, {
    title: 'description',
    dataIndex: 'description',
    key: 'description'
  }]

  const data = [
    {
      key: '1',
      title: '路线名称',
      description: title
    },
    {
      key: '2',
      title: '价格',
      // 艹，原来支持jsx语法
      description: <>   
        <Typography.Text type="danger">￥{price}</Typography.Text>
      </>
    },
    {
      key: '3',
      title: '限时抢购折扣',
      description: discount ? <>
        <Typography.Text delete>￥{price}</Typography.Text>
        <Typography.Text type="danger">￥{discount}</Typography.Text>
      </> : '暂无折扣'
    },
    {
      key: '4',
      title: '领取优惠',
      description: '无优惠券可取'
    },
    {
      key: '5',
      title: '线路评价',
      description: <>
      <Rate allowHalf defaultValue={rating}/> {rating}星
      </>
    },
  ]
  return <div className={styles['product-intro']}>
      {/* 标题 */}
      <Typography.Title level={4}>{title}</Typography.Title>
      {/* 描述 */}
      <Typography.Text type="secondary">{shortDescription}</Typography.Text>
      {/* 价格 */}
      <div className={styles['price-rating']}>
        ￥
        <Typography.Text style={{fontSize: 30, color: '#be0404'}}>{price}</Typography.Text>
        /人起
        <Typography.Text style={{fontSize: 30, color: '#be0404', marginLeft: 30}}>{rating}</Typography.Text>分
      </div>
      <Carousel slidesToShow={3} autoplay>
        {
          pictures.map((picture, index) => {
            return  <Image src={picture} height="120px"/>
          })
        }
      </Carousel>
      <Table columns={columns} dataSource={data} pagination={false} size="small" />
  </div>
}