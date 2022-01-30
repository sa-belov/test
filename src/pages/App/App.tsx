import React from 'react';
import Header from '../../components/Header/Header';
import styles from './App.module.sass';
import Navbar from '../../components/Navbar/Navbar';
import routes from '../../router/routes';
import { Route, Switch } from 'react-router-dom';

function App() {
  const renderRoutes = () => {
    return routes.map((route) => <Route key={route.id} path={route.path} component={route.component} exact={true} />);
  };

  return (
    <div className={styles.content}>
      <Header />
      <Navbar />
      <div className={styles.line}></div>
      <Switch>{renderRoutes()}</Switch>
    </div>
  );
}

export default App;
