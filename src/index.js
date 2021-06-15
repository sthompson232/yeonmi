import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>,
  rootElement
);
