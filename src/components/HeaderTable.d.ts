import React from 'react';
import { Column } from '../utils/columns.d.ts';

interface HeaderTableProps {
  columnsName: Column[]; 
}

declare const HeaderTable: React.FC<HeaderTableProps>;
export default HeaderTable;