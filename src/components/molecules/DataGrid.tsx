import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryTable, PrimaryTableBody, PrimaryTableHead } from "../atoms/Table";

export const DataGrid: FC<{
  columnNames: string[];
  records: recordsType;
  OptionButtons?: Array<{
    ButtonComponent: FC<{
      onClick?: (() => void) | undefined;
    }>;
    callback: (arg: number) => void;
  }>;
}> = ({ columnNames, records, OptionButtons }) => {
  return (
    <PrimaryTable
      Head={<PrimaryTableHead columnNames={columnNames} />}
      Body={<PrimaryTableBody records={records} OptionButtons={OptionButtons} />}
    />
  );
};
