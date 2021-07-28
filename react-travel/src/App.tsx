import React from 'react';
import styles from './App.module.css';
import { HomePage } from './pages';
import { BrowserRouter, Route } from 'react-router-dom';

const App:React.FC = () => {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path='/' component={HomePage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
