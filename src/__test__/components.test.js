import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderTable from '../components/HeaderTable';
import LinesTable from '../components/LinesTable';

const mockData = [['Jane', 30, 'feminin'], ['John', 25, 'masculin']];

describe('HeaderTable Component', () => {
  it('renders column names correctly', () => {
    const columnsName = ['Nom', 'Âge', 'Sexe'];
    render(<HeaderTable columnsName={columnsName} />);

    columnsName.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});

describe('LinesTable Component', () => {

it('should render the correct number of lines and cells', () => {
    render(<LinesTable linesValue={mockData} />);
    
    const lines = screen.getAllByRole('row');
    expect(lines).toHaveLength(mockData.length);

    const cells = screen.getAllByRole('cell');
    const totalCells = mockData.reduce((acc, curr) => acc + curr.length, 0);
    expect(cells).toHaveLength(totalCells);
});

it('should display the correct content in cells', () => {
    render(<LinesTable linesValue={mockData} />);
    
    mockData.forEach(row => {
    row.forEach(cellValue => {
        expect(screen.getByText(cellValue.toString())).toBeInTheDocument();
    });
    });
});
});