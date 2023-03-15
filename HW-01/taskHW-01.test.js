import {getPercents} from './taskHW-01';

describe('checking the getPercents function for a percentage of the number', () => {

  it('add 30 and 200 expect 60', () => {
    expect(getPercents(30, 200)).toBe(60);
    });

    it('add 30 and 200 expect 80', () => {
      expect(getPercents(30, 200)).toBe(80);
      });
});
