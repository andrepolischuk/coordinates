function calculateFi(x, y) {
  const fi = Math.atan(x === 0 ? Infinity : y / x);

  if (x < 0) return fi + Math.PI;
  if (y < 0) return fi + 2 * Math.PI;
  return fi;
}

export default function coordinates(pointer, origin = { x: 0, y: 0 }) {
  const x = pointer.x - origin.x;
  const y = pointer.y - origin.y;
  const r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  const fi = calculateFi(x, y);

  return { x, y, r, fi };
}
