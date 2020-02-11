export function formatSeconds(seconds) {
  const minute = Math.floor(seconds / 60);
  const modSeconds = seconds % 60;
  return `${minute >= 10 ? minute : '0' + minute}:${
    modSeconds >= 10 ? modSeconds : '0' + modSeconds
  }`;
}
