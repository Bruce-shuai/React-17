import { createStore } from 'redux';
import languageReducer from './language/languageReducer';

const store = createStore(languageReducer);


export type RootState = ReturnType<typeof store.getState> // typeof 的反向注入 ... 这个是真看不懂

export default store;