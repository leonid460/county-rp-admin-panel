import React from 'react';
import styled from "styled-components";
import BlueButton from 'AdminPanel/components/atoms/BlueButton';
import {NavLink} from "react-router-dom";

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
  width: 100%;
  animation: slide-down 0.4s ease;
`;

const TableCell = styled.div`
  
`;

const HeaderCell = styled(TableCell)`
  text-align: left;
  color: #9a9b9e;
  font-weight: bold;
`;

interface TableWrapperProps {
  columnsCount: number;
  withEdit: 'true' | 'false'
}

const TableWrapper = styled.div<TableWrapperProps>`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  background: white;
  
  & > ${TableRow} > ${TableCell} {
    ${props => props.withEdit === 'true' ? `
      width: calc((100% - 200px)/${props.columnsCount});
      
      &:last-child {
        width: 200px
      }
    `: `
      width: calc(100% / ${props.columnsCount})px
    `}
  }
  
  & > ${TableRow} > ${HeaderCell} {
    ${props => props.withEdit === 'true' ? `
      width: calc((100% - 200px)/${props.columnsCount});
    `: `
      width: calc(100% / ${props.columnsCount});
    `}
  }
`;

interface ResultsTableProps {
  headers: string[];
  searchResultsItems: string[][];
  editRoute?: string;
}

export const Table = ({headers, searchResultsItems, editRoute}: ResultsTableProps) => (
  <TableWrapper withEdit={editRoute ? 'true' : 'false'} columnsCount={headers.length}>
    <TableRow>
      {
        headers.map((headerCellText, headerCellKey) => (
          <HeaderCell key={headerCellKey}>
            {headerCellText}
          </HeaderCell>
        ))
      }
    </TableRow>
    {
      searchResultsItems.map((rowCells, key) => (
        <TableRow key={key}>
          {
            rowCells.map((cellData, cellKey) => (
              <TableCell key={cellKey}>{cellData}</TableCell>
            ))
          }
          {
            editRoute &&
            <TableCell>
                <BlueButton as={NavLink} to={`${editRoute}/${rowCells[0]}`}>
                  Редактировать
                </BlueButton>
            </TableCell>
          }
        </TableRow>
      ))
    }
  </TableWrapper>
)