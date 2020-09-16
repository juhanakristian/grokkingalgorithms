type S = number;

export default function sort(sequence: S[]): S[] {
  if (sequence.length <= 1) return sequence;
  if (sequence.length === 2) return sequence.sort((a: S, b: S) => a - b);

  const pivot = Math.floor(sequence.length / 2);

  const value = sequence[pivot];
  const left = sequence.filter((e) => e < value);
  const right = sequence.filter((e) => e > value);

  return [...sort(left), value, ...sort(right)];
}
