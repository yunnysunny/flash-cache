const expect = require('chai').expect;
const FlashCache = require('../index');

const INTREVAL = 1000;
var cache = new FlashCache({interval:INTREVAL});
const TEST_LEN = 100 * 1000;//100K
const data = new Array(TEST_LEN);
for (let i=0;i<TEST_LEN;i++) {
    data[i] = i+1;
}
const KEY = 'key';
const VALUE = 'something';

describe('clear test',function() {
    it('should set cache success',function() {
        cache.save(KEY,VALUE);
        expect(cache.get(KEY)).to.equal(VALUE);
    });
    it('should remove a value success',function() {
        cache.remove(KEY);
        expect(cache.getElement(KEY)).to.be.equal(null);
    });
    it('should insert ' + TEST_LEN + ' elements success',function(done) {
        for (let i=0;i<TEST_LEN;i++) {
            cache.save(i,data[i]);
        }
        expect(cache.young.size).to.be.equal(TEST_LEN);
        setTimeout(function() {
            expect(cache.young.size).to.be.equal(0);
            expect(cache.old.size).to.be.equal(TEST_LEN);
            done();
        },INTREVAL)
    });
    it('should clear all success', function() {
        cache.clearAll();
        expect(cache.young.size).to.be.equal(0);
        expect(cache.old.size).to.be.equal(0);
    });
});