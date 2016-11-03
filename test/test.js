const { assert, expect } = require('chai');


describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1,2,3].indexOf(4)).to.equal(-1);
    });
  });
});

describe('Object', () => {
  describe('assign', () => {
    it('should modify first object', () => {
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
