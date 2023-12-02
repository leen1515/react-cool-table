import { columns } from '../utils/columns';

describe('columns function', () => {
  it('should return correct columns structure from data object', () => {
    const mockData = [{ name: 'Jane', age: 30, gender: 'feminin' }, { name: 'John', age: 25, gender: 'masculin' }];
    const result = columns(mockData);
    expect(result).toEqual([{ Header: 'name' }, { Header: 'age' }, { Header: 'gender' }]);
  });

  it('should handle empty data array', () => {
    const mockData = [];
    const result = columns(mockData);
    expect(result).toEqual([]);
  });
});
