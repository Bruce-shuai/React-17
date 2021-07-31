import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { Footer, Header, SideMenu, Carousel, ProductCollection } from '../../components';
import styles from './HomePage.module.css';
import sideImg1 from '../../assets/images/sider_2019_02-04-2.png';
import sideImg2 from '../../assets/images/sider_2019_02-04.png';
import sideImg3 from '../../assets/images/sider_2019_12-09.png';
import { withTranslation, WithTranslation } from 'react-i18next';
import axios from 'axios';
import { Spin } from 'antd';
import {connect} from 'react-redux'
import { RootState } from '../../redux/store';
import { FetchRecommendProductsFailActionCreator, FetchRecommendProductsStartActionCreator, FetchRecommendProductsSuccessActionCreator } from '../../redux/recommendProducts/recommendProductsActions';

interface State {
  loading: boolean,
  error: string | null,
  productList: any[]   // 接口数据，还是用 any 类型好
}

// mapStateToProps 和 mapDispatchToProps 都是有返回值的函数
const mapStateToProps = (state: RootState) => {
  return {
    productList: state.recommendProducts.productList,
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error
  }
}
// 对于disptach 可以做类型定义也可以不做
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => {
      dispatch(FetchRecommendProductsStartActionCreator())
    },
    fetchSuccess: (data) => {
      dispatch(FetchRecommendProductsSuccessActionCreator(data))
    },
    fetchFail: (error) => {
      dispatch(FetchRecommendProductsFailActionCreator(error))
    }
  }
}

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends React.Component<PropsType, State> {

  async componentDidMount() {
    this.props.fetchStart()
    try {
      const response = await axios.get('http://123.56.149.216:8080/api/productCollections', {
        headers: {
          "x-icode": "B451FB0CC5BDB4D5"
        }
      })
      const {data} = await response;
      this.props.fetchSuccess(data)
    } catch(e) {
      this.props.fetchFail(e.message)
    }
    
  }
  render() {
    const {t, error, productList, loading} = this.props;   // es6解构要在函数里使用，别在class上直接这么用
    if (error) {
      return <div>网站错误：{error}</div>
    }
    if (loading) {
      return <Spin tip="Loading..." size="large" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}/>
    }
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
          <ProductCollection productList={productList[0].touristRoutes} sideSrc={sideImg1}/>
        </div>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="danger">{t("home_page.new_arrival")}</Typography.Title>
          </Divider>
          <ProductCollection productList={productList[1].touristRoutes} sideSrc={sideImg2}/>
        </div>
        <div className={styles.product}>
          <Divider orientation="left">
            <Typography.Title level={4} type="success">{t("home_page.domestic_travel")}</Typography.Title>
          </Divider>
          <ProductCollection productList={productList[2].touristRoutes} sideSrc={sideImg3}/>
        </div>
      </div>
      <Footer />    
  </>
  }
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent));