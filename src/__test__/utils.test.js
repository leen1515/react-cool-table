import { columns } from '../utils/columns';
import { lines } from '../utils/lines';


const mockData = [{ name: 'Jane', age: 30, gender: 'feminin' }, { name: 'John', age: 25, gender: 'masculin' }];

describe('columns function', () => {
  it('should return correct columns structure from data object', () => {
    const result = columns(mockData);
    expect(result).toEqual([{ Header: 'name' }, { Header: 'age' }, { Header: 'gender' }]);
  });

  it('should handle empty data array', () => {
    const mockData = [];
    const result = columns(mockData);
    expect(result).toEqual([]);
  });
});



describe('lines function', () => {
  it('should transform data array into array of objects based on column names', () => {

    const columnsNames = ['name', 'age'];

    const expected = [
        { name: 'Jane', age: 30},
        { name: 'John', age: 25}  
      ];

    const result = lines(mockData, columnsNames);
    expect(result).toEqual(expected);
  });
});

