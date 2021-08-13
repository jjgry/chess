import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./reducers";
import { Provider } from "react-redux";
import { Game } from "./contaniers/Game";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
