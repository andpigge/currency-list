import React from 'react';
import ReactDOM from 'react-dom';
import "./shared/styles/index.css";
import { AppLayout } from "./components/app-layout";

ReactDOM.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
  document.getElementById("root")
);
