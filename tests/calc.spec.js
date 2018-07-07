import { expect } from 'chai';
import {
  sum, sub, div, mult,
} from '../src/calc';

describe('Calc', () => {
  describe('smoke tests', () => {
    it.skip('should exist the method sum', () => {
      expect(sum).to.exist.and.be.an('function');
    });

    it.skip('should exist the method sub', () => {
      expect(sub).to.exist.and.be.an('function');
    });

    it.skip('should exist the method div', () => {
      expect(div).to.exist.and.be.an('function');
    });

    it.skip('should exist the method mult', () => {
      expect(mult).to.exist.and.be.an('function');
    });
  });

  describe('sum', () => {
    it.skip('should return 4 when sum(2 + 2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {
    it.skip('should return 4 when sub(6 - 2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it.skip('should return 2 when div(4 / 2)', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it.skip('should not be possible to divide by zero', () => {
      expect(div(4, 0)).to.be.equal('no should exist divisior by zero');
    });
  });

  describe('mult', () => {
    it.skip('should return 8 when mult(4 * 2)', () => {
      expect(mult(4, 2)).to.be.equal(8);
    });
  });
});
