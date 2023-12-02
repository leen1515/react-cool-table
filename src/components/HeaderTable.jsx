import React from "react";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #9b9b9b;
`;

const HeadElement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-weight: bold;
    color: #fff;
    font-size: 1.2em;
    text-transform: uppercase;
`;
    
function HeaderTable({ columnsName }) {
    return (
        <Header>
            {columnsName.map((element, i) => (
                <HeadElement key={element? element: i}>{element? element: " "}</HeadElement>
            ))}
        </Header>
    );
}


export default HeaderTable;