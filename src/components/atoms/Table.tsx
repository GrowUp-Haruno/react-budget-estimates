import { FC, ReactNode } from "react";
import { Table, TableContainer, Tbody, Thead } from "@chakra-ui/react";

export const PrimaryTable: FC<{
  Head: ReactNode;
  Body: ReactNode;
}> = ({ Head, Body }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md", "lg"]}>
        <Thead>{Head}</Thead>
        <Tbody>{Body}</Tbody>
      </Table>
    </TableContainer>
  );
};
