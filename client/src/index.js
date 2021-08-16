import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./reducers";
import { Provider } from "react-redux";
import Page from "./components/Page";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Page />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
