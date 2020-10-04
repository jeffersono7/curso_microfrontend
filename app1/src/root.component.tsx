import React, { Suspense, lazy } from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
const App = lazy(() => import('./App'));

const generateClassName = createGenerateClassName({
  seed: 'app1'
});

export default function Root(props) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </StylesProvider>
  );
}
