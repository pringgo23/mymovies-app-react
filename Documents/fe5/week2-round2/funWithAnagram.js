function sortStr(str) {
  return str.split("").sort().join("");
}

function funWithAnagrams(text) {
  // Write your code here
  for (let i = 0; i < text.length - 1; i++) {
    for (let j = text.length - 1; i < j; j--) {
      console.log(sortStr(text[i]), sortStr(text[j]));
      if (sortStr(text[i]) === sortStr(text[j])) {
        text.splice(j, 1);
      }
    }
  }

  return text.sort();
}

console.log(funWithAnagrams(["code", "doce", "ecod", "framer", "frame"])); // ["code","frame","framer"]
console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"])); // ["aaagmnrs", "code"]
console.log(funWithAnagrams(["poke", "pkoe", "okpe", "ekop"])); // ["poke"].
