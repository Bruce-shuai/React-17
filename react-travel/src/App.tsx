import React from 'react';
import styles from './App.module.css';
import { HomePage } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App:React.FC = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/sign' render={() => <div>用户登录页面</div>} />
          <Route render={() => <div>404 not found 页面去火星了</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
