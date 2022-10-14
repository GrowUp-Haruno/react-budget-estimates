import { FC, ReactNode } from "react";
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { recordsType } from "../../Pages/App.model";
import { BaseInput } from "./Input";

export const PrimaryTable: FC<{
  Head: ReactNode;
  Body: ReactNode;
}> = ({ Head, Body }) => {
  return (
    <TableContainer w="full">
      <Table size={["sm", "sm", "md"]}>
        <Thead>{Head}</Thead>
        <Tbody>{Body}</Tbody>
      </Table>
    </TableContainer>
  );
};

export const PrimaryTableHead: FC<{ columnNames: string[] }> = ({ columnNames }) => {
  return (
    <Tr backgroundColor="green.100">
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
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ records, backButton, frontCheckbox, onNumberInputChange, onStringInputChange }) => {
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
          {record.fields.map((field, fieldIndex) => {
            const StringField =
              typeof field === "number" ? (
                <Text as={record.isDelete ? "s" : undefined}>{field.toLocaleString("ja-JP")}</Text>
              ) : (
                <Text as={record.isDelete ? "s" : undefined}>{field}</Text>
              );
            const InputField =
              typeof field === "number" ? (
                <BaseInput
                  onChange={(e) => {
                    onNumberInputChange(recordIndex, fieldIndex, e);
                  }}
                  value={field.toLocaleString("ja-JP")}
                />
              ) : (
                <BaseInput
                  onChange={(e) => {
                    onStringInputChange(recordIndex, fieldIndex, e);
                  }}
                  value={field}
                />
              );
            return <Td key={fieldIndex}>{record.isChange ? InputField : StringField}</Td>;
          })}
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
