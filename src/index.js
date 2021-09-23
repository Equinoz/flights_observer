import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/style.scss';
import store from './store';

import App from './components/App';

store.dispatch({ type: "FETCH_DATAS" });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
