import './set-public-path';

// Anything exported from this file is importable by other in-browser modules.
export function api() {
  return {
    request: () => console.log('fazendo requisição'),
  };
}

export function cache() {
  return () => console.log('caching!');
}
