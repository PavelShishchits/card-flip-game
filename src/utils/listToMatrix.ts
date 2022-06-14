export default function <T = any>(list: T[], rows: number): T[][] {
  const itemsPerRow = Math.ceil(list.length / rows);

  return list.reduce((accumulator: T[][], item, index) => {
    const currentRow = Math.floor(index / itemsPerRow);
    if (!accumulator[currentRow]) {
      accumulator[currentRow] = [item];
    } else {
      accumulator[currentRow].push(item);
    }
    return accumulator;
  }, []);
}
