import React, {useState, useEffect} from 'react';
// RouteComponentProps 用于给组件props定义match的接口
import { RouteComponentProps, useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, DatePicker, Spin, Divider, Typography, Anchor, Menu } from 'antd';
import {Header, Footer, ProductComment} from '../../components';
import styles from './DetailPage.module.css';
import { commentMockData } from './mockup';
import { ProductIntro } from '../../components/productIntro';
// 给match定义一下参数的类型
interface MatchParams {
  touristRouteId: string
}

export const DetailPage:React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const { touristRouteId } = useParams<MatchParams>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`, {
          headers: {
            "x-icode": "B451FB0CC5BDB4D5"
          }
        })
        setProduct(data);
      } catch(e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  if (error) {
    return <div>网站错误：{error}</div>
  }
  if (loading) {
    return <Spin tip="Loading..." size="large" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh"
    }}/>
  }



  return <>
    <Header />
      <div className={styles['page-content']}>
        {/* 为什么一刷新就报错不认识product.title？ */}
        {/* {console.log(product.title)} */}
        {/* 产品简介 与 日期选择 */}
        <div className={styles['product-intro-container']}>
          <Row>
            <Col span={13}>
              <ProductIntro 
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                discount={product.price}
                coupons={product.coupons}
                points={product.points}
                rating={product.rating}
                pictures={product.touristRoutePictures.map(picture => picture.url)}
              />
            </Col>
            {/* 这里的style里的数字不要加引号 */}
            <Col span={11}><DatePicker.RangePicker open style={{marginTop: 20}}/></Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        {/* antd 中 Menu 和 Anchor 相互搭配这个我是真没想到!厉害！！ */}
        <Anchor className={styles['product-detail-anchor']}>
          <Menu mode="horizontal" 
            // 不错，在这里增加了毛玻璃的效果，这下有点类似苹果官网的味道了
            style={{ 
              backdropFilter:  "blur(6px)", 
              height: 40, 
              display: 'flex', 
              justifyContent: "center", 
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.7)",
              fontSize: 14
            }}>
            <Menu.Item>
              <Anchor.Link href="feature" title="产品特色"/>
            </Menu.Item>
            <Menu.Item>
              <Anchor.Link href="fees" title="费用"/>
            </Menu.Item>
            <Menu.Item>
              <Anchor.Link href="notes" title="预定须知"/>
            </Menu.Item>
            <Menu.Item>
              <Anchor.Link href="comments" title="商品评价"/>
            </Menu.Item>
          </Menu>
        </Anchor>
        {/* 产品特色 */}
        <div id='feature' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div 
            dangerouslySetInnerHTML={{
              __html: product.features
            }}
          />
        </div>
        {/* 费用 */}
        <div id='fees' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div 
            dangerouslySetInnerHTML={{
              __html: product.fees
            }}
            style={{display: "flex", alignItems: "center", justifyContent: "center"}}
          />
        </div>
        {/* 预定须知 */}
        <div id='notes' className={styles['product-detail-container']}>
          <Divider orientation="center">
            <Typography.Title level={3}>预定须知</Typography.Title>
          </Divider>
          <div 
            dangerouslySetInnerHTML={{
              __html: product.notes
            }}
          />
        </div>
        {/* 商品评价 */}
        <div id='comments' className={styles['product-detail-container']}>
        <Divider orientation="center">
            <Typography.Title level={3}>商品评价</Typography.Title>
          </Divider>
          <ProductComment 
            // 传递的是一个引用类型
            data={commentMockData}
          />
        </div>
      </div>
    <Footer />
  </>
}