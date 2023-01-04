import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from './stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootStore = new RootStore();
root.render(
  <Provider {...rootStore} rootStore={rootStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
