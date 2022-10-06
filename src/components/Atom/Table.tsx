import { Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../models/modelBadget";

export const PrimaryTable: FC<{
  columnNames: string[];
  records: recordsType;
}> = ({ columnNames, records }) => {
  return (
    <TableContainer>
      <Table size={["sm", "md", "lg"]}>
        <Thead>
          <Tr>
            {columnNames.map((columnName, i) => (
              <Th key={columnName} isNumeric={columnNames.length - 1 === i}>
                {columnName}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {records.map((record) => (
            <Tr key={record.id}>
              {record.fields.map((field, i) => (
                <Td key={i} isNumeric={record.fields.length - 1 === i}>
                  {field}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
