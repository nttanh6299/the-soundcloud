export function formatTitle(title) {
  if (title.indexOf('-') !== -1) {
    return title.split('-')[1].trim();
  }
  return title;
}
