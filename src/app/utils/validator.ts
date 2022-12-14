export function isValidSearchString(searchTxt: string): boolean {
  let letterCountObj: any = {};
  for (let i = 0; i < searchTxt.length; i++) {
    letterCountObj[searchTxt[i]] = isNaN(letterCountObj[searchTxt[i]])
      ? 1
      : letterCountObj[searchTxt[i]] + 1;
  }
  return Object.values(letterCountObj).includes(3);
}
