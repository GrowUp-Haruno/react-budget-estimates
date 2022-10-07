import { FC, ReactNode } from "react";
import { Table, TableContainer, Tbody, Thead } from "@chakra-ui/react";

export const PrimaryTable: FC<{
  tableHead: ReactNode;
  tableBody: ReactNode;
}> = ({ tableHead, tableBody }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md", "lg"]}>
        <Thead>{tableHead}</Thead>
        <Tbody>{tableBody}</Tbody>
      </Table>
    </TableContainer>
  );
};
