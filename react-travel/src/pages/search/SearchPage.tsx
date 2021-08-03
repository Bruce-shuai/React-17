import React, {useEffect} from 'react';
import { Header, Footer, FilterArea, ProductList } from '../../components';
import { useParams, useLocation } from 'react-router-dom';
import { searchProduct } from '../../redux/productSearch/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
interface MatchParams {
  keywords: string
}

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParams>();
  
  const loading = useSelector(state => state.productSearch.loading);
  const error = useSelector(state => state.productSearch.error);
  const pagination = useSelector(state => state.productSearch.pagination);
  const productList = useSelector(s => s.productSearch.data);

  const dispatch = useDispatch();
  const location = useLocation();   // location的效果是什么呢

  useEffect(() => {
    dispatch(searchProduct({nextPage: 1, pageSize: 10, keywords}))
  }, [location])


  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({nextPage, pageSize, keywords}))
  }
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
    {/* 学习一下这些名词命名！！ */}
    <div>
      {/* 分类过滤器 */}
      <div><FilterArea /></div>
      {/* 产品列表 */}
      {/* 分页操作是一件麻烦事~ */}
      <div><ProductList 
        data={productList}
        paging={pagination}
        onPageChange={onPageChange}
      /></div>
    </div>
    <Footer />
  </>
}