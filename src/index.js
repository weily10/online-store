import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App></App>
    </StateProvider>
  </React.StrictMode>
);

