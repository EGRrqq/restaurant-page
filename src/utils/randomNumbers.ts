export function randomNumberArray(length: number) {
  if (length === 0) return [];
  if (length === 1) return [0];

  let numbers = Array.from({ length: length }, (_: void, i) => i);
  let randomNumbers = [];

  while (numbers.length > 1) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumbers.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }

  return randomNumbers;
}
