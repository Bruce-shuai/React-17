import { createStore,  applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';   // 换成从这里来引入combineReducers
import { productSearchSlice } from './productSearch/slice';
import { userSlice } from './user/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // 这里使用的就是localstorage
import { shoppingCartSlice } from './shoppingCart/slice';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]   // 这里是白名单(只保存名单中的内容)    黑名单(除了名单里的不保存，其它的数据都保存)
}

// 由于redux-toolkit 良好的兼容性，即使不使用configureStore只使用combineReducers(从@reduxjs/toolkit引入) 也可以实现redux和redux-toolkit的兼容

// 这里的rootReducer 是约定俗成的名称，最好都遵守
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState> // typeof 的反向注入 ... 这个是真看不懂

export default {store, persistor};