import test from 'ava';
import approximatelyEqual from 'approximately-equal';
import coordinates from './index';

test('shoild return default origin', async t => {
  const {x, y, r} = coordinates({x: 0, y: 0});
  t.same({x, y, r}, {x: 0, y: 0, r: 0});
});

test('shoild return specified origin', async t => {
  const {x, y, r} = coordinates({x: 100, y: 100}, {x: 100, y: 100});
  t.same({x, y, r}, {x: 0, y: 0, r: 0});
});

test('shoild return coordinates relative to default origin', async t => {
  const {x, y, r, fi} = coordinates({x: 100, y: 100});
  t.same({x, y}, {x: 100, y: 100});
  t.true(approximatelyEqual(r, 141.42, 0.01));
  t.true(approximatelyEqual(fi, Math.PI / 4, 0.01));
});

test('shoild return coordinates relative to specified origin', async t => {
  const {x, y, r, fi} = coordinates({x: 50, y: 100}, {x: 100, y: 100});
  t.same({x, y, r}, {x: -50, y: 0, r: 50});
  t.true(approximatelyEqual(fi, Math.PI, 0.01));
});
