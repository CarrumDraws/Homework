// Input: (s = "zzzaazza"), (k = 20);
// Output: ["zzz", "aa", "zz", "a"];

function formMinCoolStrings(s, k) {
  let ret = [];
  let substr = "";
  let min = Infinity; // Charcodes
  let max = -Infinity; // Charcodes
  for (let i = 0; i < s.length; i++) {
    min = Math.min(s[i].charCodeAt(0), min);
    max = Math.max(s[i].charCodeAt(0), max);
    if (max - min <= k) substr += s[i];
    else {
      ret.push(substr);
      substr = s[i];
      min = Infinity;
      max = -Infinity;
    }
  }
  return [...ret, substr];
}

function formMinCoolStringsTwo(s, k) {
  let ret = [];
  let start = 0;
  let min = s.charCodeAt(0); // Charcodes
  let max = s.charCodeAt(0); // Charcodes
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    min = Math.min(code, min);
    max = Math.max(code, max);
    if (max - min > k) {
      console.log();
      ret.push(s.substring(start, i));
      start = i;
      min = code;
      max = code;
    }
  }
  ret.push(s.substring(start, s.length));
  return ret;
}

// z a z a z a
// aaa zzz aa z

s = "";
k = 20;
console.log(formMinCoolStrings(s, k));
