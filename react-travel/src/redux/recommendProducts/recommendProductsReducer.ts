import { FETCH_RECOMMEND_PRODUCTS_FAIL, FETCH_RECOMMEND_PRODUCTS_SUCCESS, FETCH_RECOMMEND_PRODUCTS_START, RecommendProductAction } from './recommendProductsActions';

interface RecommendProductsState {
  productList: any[],    // api 的数据，所以用any更好
  loading: boolean,
  error: string | null
}

const defaultState: RecommendProductsState = {
  loading: true,
  error: null,
  productList: []
}

// 这里的数据其实就是api请求获取的数据
// 返回一个匿名函数
export default (state = defaultState, action:RecommendProductAction) => {
  switch(action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START: 
      return {...state, loading: true}
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {...state, loading: false, productList: action.payload}
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
}