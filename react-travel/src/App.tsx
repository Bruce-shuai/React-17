import React, { useEffect } from 'react';
import styles from './App.module.css';
import { DetailPage, HomePage, RegisterPage, SearchPage, SignInPage, ShoppingCartPage } from './pages';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice'; 

// 私有路由搭建
const PrivateRoute = ({ component, isAuthenticated, ...rest}) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)   // React.ceateElement 用法？
    ) : (
      <Redirect to={{pathname: '/signIn'}} />
    );
  }
  return <Route render={routeComponent} {...rest} />;
}


const App:React.FC = () => {
  const jwt = useSelector(s => s.user.token)
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
          <PrivateRoute 
            isAuthenticated={jwt !== null}
            path='/shoppingCart' 
            component={ShoppingCartPage} 
          />
          <Route render={() => <div>404 not found 页面去火星了</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );   
}

export default App;
