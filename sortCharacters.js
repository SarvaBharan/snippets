function sortCharacters(word) {
  return [...word].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(sortCharacters("JavaScript"));
