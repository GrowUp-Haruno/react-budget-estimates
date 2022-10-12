import { FC, ReactNode } from "react";
import { HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { recordsType } from "../../Pages/App.model";

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

export const PrimaryTableHead: FC<{ columnNames: string[] }> = ({ columnNames }) => {
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

export const PrimaryTableBody: FC<{
  records: recordsType;
  OptionButtons?: Array<{
    ButtonComponent: FC<{ onClick?: () => void }>;
    callback: (arg: number) => void;
  }>;
}> = ({ records, OptionButtons }) => {
  return (
    <>
      {records.map((record, recordIndex) => (
        <Tr key={record.id}>
          {record.fields.map((field, i) => (
            <Td key={i}>{field}</Td>
          ))}
          <Td>
            <HStack justify="end">
              {OptionButtons?.map(({ ButtonComponent, callback }, i) => {
                return <ButtonComponent key={i} onClick={() => callback(recordIndex)} />;
              })}
            </HStack>
          </Td>
        </Tr>
      ))}
    </>
  );
};
