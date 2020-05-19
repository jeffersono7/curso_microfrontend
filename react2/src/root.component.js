import React from 'react';
import { cache } from '@curso/api';

export default function Root(props) {
  cache()();

  return (
    <section>
      <br /> <br /> <br /> React2 carregado!
    </section>
  );
}
