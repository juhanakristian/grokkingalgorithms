// Search a sorted sequence for a element using binary search.
function search<T>(sequence: T[], element: T): number {
  let low = 0;
  let high = sequence.length - 1;

  while (low <= high) {
    let mid = low + high / 2;
    let guess = sequence[mid];
    if (guess === element) return mid;
    if (guess > element) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}
