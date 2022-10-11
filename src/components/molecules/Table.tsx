import { FC, Fragment } from "react";
import { HStack, Td, Tr } from "@chakra-ui/react";
import { recordsType } from "../../Pages/App.model";
import { ChangeButton, DeleteButton, DetailButton } from "./Button";

export const TableBody: FC<{
  records: recordsType;
  optionButtons?: Array<{
    buttonType: "detail" | "change" | "delete";
    callback: (index: number) => void;
  }>;
}> = ({ records, optionButtons }) => {
  return (
    <>
      {records.map((record, i) => (
        <Tr key={record.id}>
          {record.fields.map((field, i) => (
            <Td key={i}>{field}</Td>
          ))}
          {optionButtons === undefined ? (
            <></>
          ) : (
            <Td>
              <HStack justify="end">
                {optionButtons.map(({ buttonType, callback }) => {
                  switch (buttonType) {
                    case "detail":
                      return (
                        <DetailButton key={i} onClick={() => callback(i)} />
                      );
                    case "change":
                      return (
                        <ChangeButton key={i} onClick={() => callback(i)} />
                      );
                    case "delete":
                      return (
                        <DeleteButton key={i} onClick={() => callback(i)} />
                      );
                    default:
                      return <Fragment key={i}></Fragment>;
                  }
                })}
              </HStack>
            </Td>
          )}
        </Tr>
      ))}
    </>
  );
};
