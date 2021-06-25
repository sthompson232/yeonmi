import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const App = React.lazy(() => import ('./App'))

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-QE3HJ28DTM');
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
          <Suspense fallback={
            <div className='loader'>
              <Grid container className='loader' alignItems='center' justify='center'>
                <Grid item>
                  <CircularProgress size={100} style={{ color: '#ffffff' }}/>
                </Grid>
              </Grid>
            </div>
          }>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-QE3HJ28DTM"
            />
            <script>{injectGA()}</script>
            <App />
          </Suspense>
      </Provider>
    </React.StrictMode>,
  rootElement
);
