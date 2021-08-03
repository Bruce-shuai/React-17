import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import axios from 'axios';

// 先考虑有哪些action的类型
// api请求开始 成功 失败
// 一般的api调用也是这三种类型 好好记记人家的命名方式
export const FETCH_RECOMMEND_PRODUCTS_START = 
  "FETCH_RECOMMEND_PRODUCTS_START";   // 正在 调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 成功 调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 
  "FETCH_RECOMMEND_PRODUCTS_FAIL";    // 失败 调用推荐信息api

interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START   // typeof 用来获取这个常量的类型
}
interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any      // 这里难道不用写成any[]?
}
interface FetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
  payload: any
}

// type的用法还是要好好了解下才行
export type RecommendProductAction = FetchRecommendProductsStartAction |
FetchRecommendProductsSuccessAction |
FetchRecommendProductsFailAction

// 开始创建actionCreator
export const FetchRecommendProductsStartActionCreator = (): FetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}
export const FetchRecommendProductsSuccessActionCreator = (data): FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}
export const FetchRecommendProductsFailActionCreator = (error): FetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error
  }
}


// 这个thunk的actionCreator 还是有些不同哦，它让dispatch多支持了一种类型，函数类型
// 所以这里的返回类型将不再只是一个对象action 而是一个函数。 而这个函数的类型就是ThunkAction
// 这里的范型有点搞不懂，先记一下模板，未来把ts搞清楚了再来看看这个
// ThunkAction范型有四个参数
// 第一个是当前函数的返回值R，代表return。 要求我们定义最终的输出类型，不过由于返回的是函数类型，所以最终输出是void，也就是没有任何数据输出
// 第二个参数S比较简单，指的就是StoreState，需要输入的是我们store的类型，也就是RootState
// 第三个参数E，代表extra，意思就是定义一下我们action中额外的参数，不过我们没参数，所以是unknown
// 最后一个a，就是我们的action，我们直接使用混合action类型，recommendProductAction就可以了
export const giveMeDataActionCreator = ():ThunkAction<void, RootState, unknown, RecommendProductAction> => async (dispatch, getState) => {
  // this.props.fetchStart()
  dispatch(FetchRecommendProductsStartActionCreator());
  try {
    const response = await axios.get('http://123.56.149.216:8080/api/productCollections')
    const {data} = await response;
    // this.props.fetchSuccess(data)
    dispatch(FetchRecommendProductsSuccessActionCreator(data))
  } catch(e) {
    // this.props.fetchFail(e.message)
    dispatch(FetchRecommendProductsFailActionCreator(e.message))
  }
}