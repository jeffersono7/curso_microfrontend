export function react1(location) {
  // The navbar is always active
  return true;
}

export function react2(location) {
  return location.pathname.startsWith('/react2');
}
