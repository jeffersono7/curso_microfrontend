import React from "react";
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import App from "./App";

const generateClassName = createGenerateClassName({
  seed: 'app2'
});

export default function Root(props) {

  return (
    <StylesProvider generateClassName={generateClassName}>
      <App />
    </StylesProvider>
  );
}
