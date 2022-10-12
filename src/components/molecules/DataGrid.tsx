import { ButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable, PrimaryTableBody, PrimaryTableHead } from "../atoms/Table";

export const DataGrid: FC<{
  columnNames: string[];
  records: recordsType;
  OptionButtons?: Array<{
    ButtonComponent: FC<{
      onClick?: ButtonProps["onClick"];
    }>;
    callback: (arg: number) => void;
  }>;
}> = ({ columnNames, records, OptionButtons }) => {
  if (records.length === 0) return <></>;
  return (
    <PrimaryTable
      Head={<PrimaryTableHead columnNames={columnNames} />}
      Body={<PrimaryTableBody records={records} OptionButtons={OptionButtons} />}
    />
  );
};
