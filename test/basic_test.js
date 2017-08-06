'use strict';
const expect = require('chai').expect;
const FlashCache = require('../index');

const INTREVAL = 1000;
const cache = new FlashCache({interval:INTREVAL});
const TEST_LEN = 100 * 1000;//100K
const data = new Array(TEST_LEN);
for (let i=0;i<TEST_LEN;i++) {
    data[i] = i+1;
}

describe('basic test',function() {
    it('should query cache success',function() {
        cache.save('a','something');console.log('a',cache.get('a'));
        expect(cache.get('a')).to.equal('something');
    });
    it('should get null value when expired',function(done) {
        cache.save('b',111);
        setTimeout(function() {
            expect(cache.get('b')).to.be.null;
            done();
        },INTREVAL);
    });
    it('save data to cache',function() {
        //console.time('save data');
        for (let i=0;i<TEST_LEN;i++) {
            cache.save(i,data[i]);
        }
        //console.timeEnd('save data');
    });
    it('query data from cache',function() {
        for (let i=0;i<TEST_LEN;i++) {
            cache.get(i);
        }
    });
    it('get percentages of hit rate',function() {
        console.log('hit rate',cache.hitRate);
    });
    it('young size should be zero',function(done) {
        setTimeout(function() {
            expect(cache.young.size).to.equal(0);
            done();
        },INTREVAL);
        
    });
});
