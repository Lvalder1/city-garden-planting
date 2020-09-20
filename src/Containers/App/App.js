import React from 'react';
// import "./App.module.scss";
import styles from './App.module.scss';
import Routes from '../../Routes/Routes';
import Navigation from '../../Components/navigation';

function App() {
  return (
      <div className={styles.App}>
        <Navigation />
        <Routes />
      </div>
  );
}

export default App;
