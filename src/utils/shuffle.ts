export default function <T = any>(array: T[]): T[] {
  let shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.round(Math.random() * (i + 1));
    let t = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = t;
  }

  return shuffledArray;
}
