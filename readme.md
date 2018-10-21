# Flash Cache
Saving temporary data in memory, and clear the old data at regular time.

[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]

[npm-url]: https://npmjs.org/package/flash-cache
[travis-image]: https://img.shields.io/travis/yunnysunny/flash-cache.svg?style=flat-square
[travis-url]: https://travis-ci.org/yunnysunny/flash-cache
[coveralls-image]: https://img.shields.io/coveralls/yunnysunny/flash-cache.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yunnysunny/flash-cache?branch=master
[david-image]: https://img.shields.io/david/yunnysunny/flash-cache.svg?style=flat-square
[david-url]: https://david-dm.org/yunnysunny/flash-cache
[node-image]: https://img.shields.io/badge/node.js-%3E=_6-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

[![NPM](https://nodei.co/npm/flash-cache.png?downloads=true)](https://nodei.co/npm/flash-cache/)  

Be inspired by the GC algorithm of JVM and V8. I use two area to store data , the old area and the young area. After initializing the class of `FlashCache` with a given interval value, the instance of FlashCache's  object will move the young area's data to old area, and then create a new young area. It's  suit for saving temporary data in memory to improve you app's performance.

## Install

```npm install flash-cache```

## API
See the [api](doc/api.md) doc.

## Demo

```javascript
const FlashCache = require('flash-cache');
const cache = new FlashCache();//The default interval of moving young to old is 1000ms.
cache.save('a','the value');
console.log(cache.get('a'));
setTimeout(function() {
    console.log('young size',cache.young.size);//should get 0
},1000+100);
```

## License

[MIT](LICENSE)

  