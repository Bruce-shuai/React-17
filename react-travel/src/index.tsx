import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import './i18n/configs';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

// 这里给axios 添加默认值 很有意思！
axios.defaults.headers['x-icode'] = 'B451FB0CC5BDB4D5';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

