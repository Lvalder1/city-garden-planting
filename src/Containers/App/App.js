import React from 'react';
import styles from './App.module.scss';
import Routes from '../../Routes/Routes';
import Navigation from '../../Components/navigation';
// import Contact from '../Contact';

function App() {
  return (
      <div className={styles.App}>
        <Navigation />
        <Routes />
        {/* <Contact /> */}
      </div>
  );
}

export default App;
