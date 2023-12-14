import React from 'react';

interface CoolTableProps {
  data: object[];
  excludedColumns: string[];
}

declare const CoolTable: React.FC<CoolTableProps>;
export default CoolTable;
