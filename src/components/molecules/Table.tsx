import { FC } from "react";
import { Td, Th, Tr } from "@chakra-ui/react";
import { recordsType } from "../../Pages/App.model";
import { DetailButton } from "./Button";

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

export const PrimaryTableBody: FC<{
  records: recordsType;
  detailButtonCallback?: (index: number) => void;
}> = ({ records, detailButtonCallback }) => {
  console.log(detailButtonCallback === undefined);
  return (
    <>
      {records.map((record, i) => (
        <Tr key={record.id}>
          {record.fields.map((field, i) => (
            <Td
              key={i}
              isNumeric={
                detailButtonCallback === undefined
                  ? record.fields.length - 1 === i
                  : false
              }
            >
              {field}
            </Td>
          ))}
          {detailButtonCallback === undefined ? (
            <></>
          ) : (
            <Td isNumeric>
              <DetailButton
                onClick={() => {
                  detailButtonCallback(i);
                }}
              />
            </Td>
          )}
        </Tr>
      ))}
    </>
  );
};
