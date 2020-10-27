export default function search<T>(
  graph: Map<T, Array<T>>,
  start: T,
  searching: T
) {
  let queue: Array<T> = graph.get(start);

  const searched: Array<T> = [];
  while (queue.length > 0) {
    const current = queue.splice(0, 1)[0];
    if (searched.indexOf(current) == -1) {
      if (current === searching) {
        return true;
      } else {
        queue = queue.concat(graph.get(current));
        searched.push(current);
      }
    }
  }

  return false;
}
