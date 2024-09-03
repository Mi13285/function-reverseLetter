function reverseLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    for (let p = 0; p < alphabet.length - 1; p++) {
      if (str[i] == alphabet[p]) {
        word = `${word + str[i]}`;
        console.log(str[i]);
      }
    }
  }
  return word;
}
console.log(reverseLetter("krishan"));
