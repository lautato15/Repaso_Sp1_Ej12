function countVowels(str) {
  let counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      counter += 1;
  }
  return counter;
}
function countVowels2(str) {
  let vocals = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  for (vocal of vocals) {
    for (var i = 0; i < str.length; i++) {
      if (vocal === str[i]) counter += 1;
    }
  }
  return counter;
}
