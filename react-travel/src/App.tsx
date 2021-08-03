import React from 'react';
import styles from './App.module.css';
import { DetailPage, HomePage, RegisterPage, SearchPage, SignInPage } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App:React.FC = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signIn' component={SignInPage} />
          <Route path='/register' component={RegisterPage} />
          {/* keywords 关键搜索词  后面跟着一个? 代表参数是可选的 */}
          <Route path='/search/:keywords?' component={SearchPage} />   
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route render={() => <div>404 not found 页面去火星了</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
