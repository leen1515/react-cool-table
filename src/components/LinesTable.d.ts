import React from 'react';
import { Column } from '../utils/columns.d.ts';

interface LinesTableProps {
  linesValues: object[]; 
  columnsName: Column[]; 
}

declare const LinesTable: React.FC<LinesTableProps>;
export default LinesTable;