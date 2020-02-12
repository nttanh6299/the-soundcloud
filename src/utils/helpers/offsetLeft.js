export function offsetLeft(e) {
  let el = e;
  let x = e.offsetLeft;
  while (el.offsetParent) {
    x += el.offsetParent.offsetLeft;
    el = el.offsetParent;
  }

  return x;
}
