const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0);
  return firstLetter.toUpperCase() + word.slice(1);
};

export default capitalizeWord;
