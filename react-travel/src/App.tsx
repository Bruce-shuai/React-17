import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
