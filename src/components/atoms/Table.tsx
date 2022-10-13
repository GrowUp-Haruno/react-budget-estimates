import { FC, ReactNode } from "react";
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { recordsType } from "../../Pages/App.model";

export const PrimaryTable: FC<{
  Head: ReactNode;
  Body: ReactNode;
}> = ({ Head, Body }) => {
  return (
    <TableContainer>
      <Table size={["sm", "sm", "md"]} >
        <Thead>{Head}</Thead>
        <Tbody>{Body}</Tbody>
      </Table>
    </TableContainer>
  );
};

export const PrimaryTableHead: FC<{ columnNames: string[] }> = ({ columnNames }) => {
  return (
    <Tr backgroundColor='green.100'>
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
  frontCheckbox?: {
    Component: FC<{ onChange?: () => void }>;
    callback: (arg: number) => void;
  };
  backButton?: {
    Component: FC<{ onClick?: () => void }>;
    callback: (arg: number) => void;
  };
}> = ({ records, backButton, frontCheckbox }) => {
  return (
    <>
      {records.map((record, recordIndex) => (
        <Tr key={record.id}>
          {frontCheckbox === undefined ? (
            <></>
          ) : (
            <Td>
              <frontCheckbox.Component
                onChange={() => {
                  frontCheckbox.callback(recordIndex);
                }}
              />
            </Td>
          )}
          {record.fields.map((field, i) => (
            <Td key={i}>
              <Text as={record.isDelete ? "s" : undefined}>{field}</Text>
            </Td>
          ))}
          {backButton === undefined ? (
            <></>
          ) : (
            <Td isNumeric>
              <backButton.Component onClick={() => backButton.callback(recordIndex)} />
            </Td>
          )}
        </Tr>
      ))}
    </>
  );
};
