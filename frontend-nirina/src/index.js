import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import './assets/Styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
          <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
