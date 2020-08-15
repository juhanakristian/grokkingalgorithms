import sort from "./selectionsort";

test("selection sort returns correctly sorted sequence", () => {
  const sequence = [4, 5, 3, 2, 1];
  const result = sort(sequence);

  expect(result).toEqual([1, 2, 3, 4, 5]);
});
