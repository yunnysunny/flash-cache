# Flash Cache

[![NPM](https://nodei.co/npm/flash-cache.png?downloads=true)](https://nodei.co/npm/flash-cache/)  

Be inspired by the GC algorithm of JVM and V8. I use two area to store data , the old area and the young area. After initializing the class of `FlashCache` with a given interval value, the instance of FlashCache's  object will move the young area's data to old area, and then create a new yong area. It's  suit for saving temporary data in memory to improve you app's performance.

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
},1000);
```

## License

[MIT](LICENSE)

  