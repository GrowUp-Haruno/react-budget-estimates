import { FC, ReactNode } from "react";
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { PrimaryInput } from "./Input";
import { recordsType } from "../../commons/models";
import { CustomButtonProps } from "../../commons/types";

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
    Component: FC<{ onChange?: () => void; isChecked: boolean; isDisabled: boolean }>;
    callback: (arg: number) => void;
  };
  backButton?: {
    Component: FC<CustomButtonProps>;
    callback: (arg: number) => void;
  };
  onNumberInputChange?: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange?: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}> = ({ records, backButton, frontCheckbox, onNumberInputChange, onStringInputChange, isDisabled }) => {
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
                isChecked={record.isDelete}
                isDisabled={isDisabled}
              />
            </Td>
          )}
          {record.fields.map((field, fieldIndex) => {
            const SwitchField = (() => {
              if (typeof field === "number" && onNumberInputChange === undefined)
                return <Text>{field.toLocaleString("ja-JP")}</Text>;
              else if (typeof field === "number" && onNumberInputChange !== undefined)
                return (
                  <PrimaryInput
                    onChange={(e) => {
                      onNumberInputChange(recordIndex, fieldIndex, e);
                    }}
                    value={field.toLocaleString("ja-JP")}
                    textAlign="right"
                    isDisabled={isDisabled}
                    isDelete={record.isDelete}
                  />
                );
              else if (typeof field === "string" && onStringInputChange === undefined) return <Text>{field}</Text>;
              else if (typeof field === "string" && onStringInputChange !== undefined)
                return (
                  <PrimaryInput
                    onChange={(e) => {
                      onStringInputChange(recordIndex, fieldIndex, e);
                    }}
                    value={field}
                    isDisabled={isDisabled}
                    isDelete={record.isDelete}
                  />
                );
              return <></>;
            })();

            return <Td key={fieldIndex}>{SwitchField}</Td>;
          })}
          {backButton === undefined ? (
            <></>
          ) : (
            <Td isNumeric>
              <backButton.Component onClick={() => backButton.callback(recordIndex)} isDisabled={isDisabled} w="full" />
            </Td>
          )}
        </Tr>
      ))}
    </>
  );
};
