export function removeDuplicateBy(array, key) {
  const seen = {};
  return array.filter(item => {
    return seen.hasOwnProperty(item[key]) ? false : (seen[item[key]] = true);
  });
}
