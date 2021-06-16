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
              <App />
            </Suspense>
        </Provider>
    </React.StrictMode>,
  rootElement
);
