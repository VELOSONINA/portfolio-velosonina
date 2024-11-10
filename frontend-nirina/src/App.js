import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { store } from './Store';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-root">
          <Header/>
        </div>
      </BrowserRouter> 
    </Provider>
  );
}

export default App;
