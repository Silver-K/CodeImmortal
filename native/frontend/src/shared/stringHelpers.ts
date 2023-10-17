export function upperFirstLetter(word: string) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}
export function pascalToCamelCase(str: string, upper = false) {
  const splited = str.split('-');
  const prefix = splited.slice(1);
  const firstSplit = upper ? upperFirstLetter(splited[0]) : splited[0];
  return [firstSplit].concat(prefix.map((v) => `${v[0].toUpperCase()}${v.slice(1)}`)).join('');
}