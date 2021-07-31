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