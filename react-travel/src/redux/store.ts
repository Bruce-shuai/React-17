import { createStore, combineReducers, applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog';

// 这里的rootReducer 是约定俗成的名称，最好都遵守
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));


export type RootState = ReturnType<typeof store.getState> // typeof 的反向注入 ... 这个是真看不懂

export default store;