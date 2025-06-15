import { convertDateFormat } from './utils/dateConverter.ts';

describe('convertDateFormat', () => {
  it('converts MM/DD/YYYY to YYYY-MM-DD', () => {
    expect(convertDateFormat('01/15/2023')).toBe('2023-01-15');
    expect(convertDateFormat('6/7/2020')).toBe('2020-06-07');
    expect(convertDateFormat('12/5/1999')).toBe('1999-12-05');
  });
});
