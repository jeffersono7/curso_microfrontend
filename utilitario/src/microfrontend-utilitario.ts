import "./set-public-path";

// Anything exported from this file is importable by other in-browser modules.
export function objectFactory() {
  console.log('instanciando');

  return {
    status: 'ok'
  }
}
