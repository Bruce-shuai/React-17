import React from 'react';
import styles from './App.module.css';
import { DetailPage, HomePage, RegisterPage, SignInPage } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App:React.FC = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signIn' component={SignInPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouteId' component={DetailPage} />
          <Route render={() => <div>404 not found 页面去火星了</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
