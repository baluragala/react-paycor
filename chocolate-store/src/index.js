import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { getChocolatesWatcher } from "./saga";
import { createLogger } from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, createLogger())
);

sagaMiddleware.run(getChocolatesWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
