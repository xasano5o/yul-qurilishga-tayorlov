import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './root/App';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
    />
  </React.StrictMode>,
  document.getElementById('root')
);
