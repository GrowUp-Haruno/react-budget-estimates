import { FC, ReactNode } from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

export const PrimaryTable: FC<{
  Head: ReactNode;
  Body: ReactNode;
}> = ({ Head, Body }) => {
  return (
    <TableContainer>
      <Table size={"lg"}>
        <Thead>{Head}</Thead>
        <Tbody>{Body}</Tbody>
      </Table>
    </TableContainer>
  );
};

export const PrimaryTableHead: FC<{ columnNames: string[] }> = ({
  columnNames,
}) => {
  return (
    <Tr>
      {columnNames.map((columnName, i) => (
        <Th key={columnName} isNumeric={columnNames.length - 1 === i}>
          {columnName}
        </Th>
      ))}
    </Tr>
  );
};