import search from "./graph";

test("search returns true when value is in graph", () => {
  const graph = new Map<number, Array<number>>();
  graph.set(0, [1, 2]);
  graph.set(1, [0, 2, 3]);
  graph.set(2, [3, 1, 0]);
  graph.set(3, [2, 1]);
  const result = search(graph, 0, 3);

  expect(result).toBeTruthy();
});

test("search returns false when value is not in graph", () => {
  const graph = new Map<number, Array<number>>();
  graph.set(0, [1]);
  graph.set(1, [0, 2]);
  graph.set(2, [1, 0]);
  graph.set(3, [2]);
  const result = search(graph, 0, 3);

  expect(result).toBeFalsy();
});
