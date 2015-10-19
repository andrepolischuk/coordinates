export default (pointer, origin = {x: 0, y: 0}) => {
  const x = pointer.x - origin.x;
  const y = pointer.y - origin.y;
  const r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  const fi = Math.atan(x === 0 ? Infinity : y / x) + (x < 0 ? Math.PI : (y < 0 ? 2 * Math.PI : 0));
  return {x, y, r, fi};
};
