import test from 'ava';
import equal from 'approximately-equal';
import coordinates from './index.es5';

test('return default origin', t => {
  const {x, y, r} = coordinates({x: 0, y: 0});
  t.same({x, y, r}, {x: 0, y: 0, r: 0});
});

test('return specified origin', t => {
  const {x, y, r} = coordinates({x: 100, y: 100}, {x: 100, y: 100});
  t.same({x, y, r}, {x: 0, y: 0, r: 0});
});

test('return coordinates relative to default origin', t => {
  const {x, y, r, fi} = coordinates({x: 100, y: 100});
  t.same({x, y}, {x: 100, y: 100});
  t.true(equal(r, 141.42, 0.01));
  t.true(equal(fi, Math.PI / 4, 0.01));
});

test('return coordinates relative to specified origin', t => {
  const {x, y, r, fi} = coordinates({x: 50, y: 100}, {x: 100, y: 100});
  t.same({x, y, r}, {x: -50, y: 0, r: 50});
  t.true(equal(fi, Math.PI, 0.01));
});
