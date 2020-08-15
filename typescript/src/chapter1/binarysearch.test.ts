import search from "./binarysearch";

test("binary search finds the correct element", () => {
  const sequence = [1, 2, 3, 4, 5, 6];
  const index = search(sequence, 3);

  expect(index).toBe(2);
});

test("binary search returns -1 on element not in list", () => {
  const sequence = [1, 2, 3, 4, 5, 6];
  const index = search(sequence, 7);

  expect(index).toBe(-1);
});
