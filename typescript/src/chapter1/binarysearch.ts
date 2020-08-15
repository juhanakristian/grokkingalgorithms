// Search a sorted sequence for a element using binary search.
export default function search<T>(sequence: T[], element: T): number {
  let low = 0;
  let high = sequence.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + high / 2);
    const guess = sequence[mid];
    if (guess === element) return mid;
    if (guess > element) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}
