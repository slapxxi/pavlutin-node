const { expect } = require('chai');


describe('Array', () => {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.equal(-1);
    });
  });
});

describe('Object', function() {
  describe('.assign()', function() {
    it('should modify first object', function() {
      const object = {name: 'original', id: 0};
      Object.assign(object, {name: 'new'});
      expect(object.name).to.equal('new');
    });

    it('should not modify objects in operation', function () {
      const object = {name: 'original', id: 0};
      const fresh = Object.assign({}, object, {name: 'new'});
      expect(fresh.name).to.equal('new');
      expect(object.name).to.equal('original');
    });
  });
});
