/**
 * The class of CacheElement
 * 
 * @class CacheElement
 */
class CacheElement {
    constructor(value,time=Date.now()) {
        this.value = value;
        this.time = time;
    }
}

/**
 * The class of FlashCache
 * 
 * @class FlashCache
 * 
 */
class FlashCache {
    /**
     * Creates an instance of FlashCache.
     * @param {Object=} option
     * @param {Number=} option.interval The interval time to move young area to old.
     * @memberof FlashCache
     */
    constructor(option={interval : 1000}) {
        /**
         * @memberof FlashCache {Number} The interval time to move young area to old.
         */
        this.interval = option.interval;
        /**
         * @memberof FlashCache {Map} The old area.
         */
        this.old = new Map();
        /**
         * @memberof FlashCache {Map} The yong area.
         */
        this.young = new Map();
        /**
         * @memberof FlashCache {Number} The count of call function of get.
         */
        this.queryCount = 0;
        /**
         * @memberof FlashCache {Number} The count of hit cache.
         */
        this.hitCount = 0;
        this._doMove();
    }
    _doMove() {
        const _this = this;
        setTimeout(function moveYoungToOld() {
            _this.old = _this.young;
            _this.young = new Map();
            _this._doMove();
        },this.interval);
    }
    /**
     * Save data to cache
     * 
     * @param {any} key 
     * @param {any} value 
     * @memberof FlashCache
     */
    save(key,value) {
        this.young.set(key,new CacheElement(value));
    }
    /**
     * Get the CacheElement from FlashCache
     * 
     * @param {*} key 
     * @param {boolean} useYoungOnly [useYoungOnly=false] When it is set true, it will not read old area.
     * @return {CacheElement}
     */
    getElement(key, useYoungOnly=false) {
        this.queryCount++;
        var element = null;
        const young = this.young;
        const old = this.old;
        var container = null;
        if (young.has(key)) {
            element = young.get(key);
            container = young;
        } else if (!useYoungOnly && old.has(key)) {
            element = old.get(key);
            container = old;
        }
        if (!element) {
            return null;
        }
        if (!useYoungOnly && (new Date().getTime() - element.time > this.interval)) {
            container.delete(key);
            return null;
        }
        this.hitCount++;
        return element;
    }
    /**
     * Get data from cache
     * 
     * @deprecated
     * 
     * @param {any} key 
     * @param {boolean} [useYoungOnly=false] When it is set true, it will not read old area.
     * @returns {any}
     * @memberof FlashCache
     */
    get(key, useYoungOnly=false) {
        const element = this.getElement(key,useYoungOnly);
        return element ? element.value : null;
    }
    /**
     * Get the percentage of hit rate
     * 
     * @readonly
     * @memberof FlashCache
     */
    get hitRate() {
        return this.hitCount / this.queryCount;
    }
}

module.exports = FlashCache;