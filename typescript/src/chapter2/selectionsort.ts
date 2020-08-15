function findSmallest<T>(sequence: T[]) {
  let index = 0;
  let smallest = sequence[index];
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] < smallest) {
      smallest = sequence[i];
      index = i;
    }
  }

  return index;
}

export default function sort<T>(sequence: T[]): T[] {
  const sorted: T[] = [];
  const length = sequence.length;
  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallest(sequence);
    sorted.push(sequence[smallestIndex]);
    sequence.splice(smallestIndex, 1);
  }

  return sorted;
}
