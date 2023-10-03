import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducer that holds our results
const random = (state = {}, action) => {
  if (action.type === "SET_RANDOM") {
    return action.payload;
  }
  return state;
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    random,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
