import { createStore,  applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { combineReducers } from '@reduxjs/toolkit';   // 换成从这里来引入combineReducers

// 由于redux-toolkit 良好的兼容性，即使不使用configureStore只使用combineReducers(从@reduxjs/toolkit引入) 也可以实现redux和redux-toolkit的兼容

// 这里的rootReducer 是约定俗成的名称，最好都遵守
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));


export type RootState = ReturnType<typeof store.getState> // typeof 的反向注入 ... 这个是真看不懂

export default store;