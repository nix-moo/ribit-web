export function splitNtrim(str, ss = '\n+') {
  let res = str.split(ss).map(substr => {
    substr.trim()
  })
  return res;
}

