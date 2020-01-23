import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { initialState, totalReducer } from "./reducers/totalReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

// Import Store
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducer function

// createStore function takes reducer
const store = createStore(totalReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
