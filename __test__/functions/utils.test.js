import { getFavoriteListContent } from '../../utils/formatter';

describe('getFavoriteListContent function', () => {
  it('if real estate number is 1 should return "propiedad guardada"', () => {
    const input = 1;
    const output = '1 propiedad guardada';
    expect(getFavoriteListContent(input)).toMatch(output);
  });
  it('if real estate number is diferent from 1 should return "propiedades guardadas"', () => {
    const input = 2;
    const output = `${input} propiedades guardadas`;
    expect(getFavoriteListContent(input)).toMatch(output);
  });
});