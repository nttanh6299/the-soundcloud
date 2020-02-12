export function volumeClassName(volume, muted) {
  if (muted) {
    return 'off';
  }

  if (volume > 0.7) {
    return 'up';
  } else if (volume > 0) {
    return 'down';
  }

  return 'off';
}
