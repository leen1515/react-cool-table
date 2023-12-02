import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderTable from '../components/HeaderTable';

describe('HeaderTable Component', () => {
  it('renders column names correctly', () => {
    const columnsName = ['Nom', 'Âge', 'Sexe'];
    render(<HeaderTable columnsName={columnsName} />);

    columnsName.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
