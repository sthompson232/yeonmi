import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

const App = React.lazy(() => import ('./App'))

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <Suspense fallback={<h1>Loading</h1>}>
              <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
  rootElement
);
