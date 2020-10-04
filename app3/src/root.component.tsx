import React, { useState } from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import App from './App';

const generateClassName = createGenerateClassName({
  seed: 'app3'
});

export default function Root(props) {

  return (
    <StylesProvider generateClassName={generateClassName}>
      <App />
    </StylesProvider>
  );
}
