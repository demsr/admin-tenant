import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/auth";
import { GraphProvider } from "./context/graph";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider appId="612b8a8c955a111d71f7adf5">
      <GraphProvider>
        <App />
      </GraphProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
