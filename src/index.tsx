import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { Router } from 'react-router-dom';
import history from './shared/history';
import { Provider } from 'react-redux';
import store from './redux/store';
import { startMirage } from './mock';

if (process.env.NODE_ENV === 'development') {
  startMirage();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
