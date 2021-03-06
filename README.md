# coordinates [![Build Status][travis-image]][travis-url]

> Calculate relative coordinates

## Install

```sh
npm install --save coordinates
```

## Usage

```js
import coordinates from 'coordinates';

coordinates({ x: 100, y: 100 }); // { x: 100, y: 100, r: 141.421, fi: 0.785 }
coordinates({ x: 50, y: 100 }, { x: 100, y: 100 }); // { x: -50, y: 0, r: 50, fi: 3.146 }
```

## API

### coordinates(point[, origin])

Return relative coordinates in [Cartesian][cartesian] and [polar][polar] coordinate systems.

#### point

Type: `object`

Point `x`, `y` coordinates.

#### origin

Type: `object`
Default: `{ x: 0, y: 0 }`

Origin `x`, `y` coordinates.

## Related

* [global-offset][global-offset] — element global offset
* [is-pointer-inside][is-pointer-inside] — check if pointer is inside the element
* [is-pointer-near][is-pointer-near] — check if pointer is near the element

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/coordinates
[travis-image]: https://travis-ci.org/andrepolischuk/coordinates.svg?branch=master

[cartesian]: https://en.wikipedia.org/wiki/Cartesian_coordinate_system
[polar]: https://en.wikipedia.org/wiki/Polar_coordinate_system

[global-offset]: https://github.com/andrepolischuk/global-offset
[is-pointer-inside]: https://github.com/andrepolischuk/is-pointer-inside
[is-pointer-near]: https://github.com/andrepolischuk/is-pointer-near
