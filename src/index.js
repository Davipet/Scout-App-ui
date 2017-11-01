import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from  './reducers'
import { Provider } from 'react-redux'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
