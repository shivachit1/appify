import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { registerServiceWorker } from './serviceWorker';

import App from './App';

import makeStore from "./redux/store";

const store = makeStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

registerServiceWorker();

