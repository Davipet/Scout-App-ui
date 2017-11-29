import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from  './reducers'
import { Provider } from 'react-redux'
import { getKit } from './actions'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddleware,
        thunk
    )
)

store.dispatch(getKit())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
