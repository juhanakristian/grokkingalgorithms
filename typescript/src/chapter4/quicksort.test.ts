import sort from "./quicksort";

test("quicksort returns correctly sorted sequence", () => {
  const sequence = [4, 5, 3, 2, 1];
  const result = sort(sequence);

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("quicksort returns correctly sorted 2 element sequence", () => {
  const sequence = [55, 5];
  const result = sort(sequence);

  expect(result).toEqual([5, 55]);
});

test("quicksort returns correctly sorted large element sequence", () => {
  const sequence = [44, 123, 1, 55, 701, 1024, 222, 543, 13];
  const result = sort(sequence);

  expect(result).toEqual([1, 13, 44, 55, 123, 222, 543, 701, 1024]);
});
