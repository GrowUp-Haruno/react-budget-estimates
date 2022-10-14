// import { ButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable, PrimaryTableBody, PrimaryTableHead } from "../atoms/Table";

export const DataGrid: FC<{
  columnNames: string[];
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
}> = ({
  columnNames,
  records,
  backButton,
  frontCheckbox,
  onNumberInputChange,
  onStringInputChange,
}) => {
  if (records.length === 0) return <></>;
  return (
    <PrimaryTable
      Head={<PrimaryTableHead columnNames={columnNames} />}
      Body={
        <PrimaryTableBody
          records={records}
          backButton={backButton}
          frontCheckbox={frontCheckbox}
          onNumberInputChange={onNumberInputChange}
          onStringInputChange={onStringInputChange}
        />
      }
    />
  );
};
