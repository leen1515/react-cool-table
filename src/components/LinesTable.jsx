import React from "react";
import styled from "styled-components";

const BodyTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Lines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Cells = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: 400;
  color: #000;
  font-size: 1em;
  border-bottom: 1px solid #9b9b9b;
`;

function LinesTable({ linesValue }) {
    return (
        <BodyTable>
            {linesValue.map((line, lineIndex) => (
                <Lines key={lineIndex} role="row" data-testid={`row-${lineIndex}`}>
                    {line.map((cell, cellIndex) => (
                        <Cells
                            key={cellIndex}
                            role="cell"
                            data-testid={`cell-${lineIndex}-${cellIndex}`}
                        >
                            {cell}
                        </Cells>
                    ))}
                </Lines>
            ))}
        </BodyTable>
    );
}

export default LinesTable;
