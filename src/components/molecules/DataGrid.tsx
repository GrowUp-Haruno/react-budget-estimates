import { FC } from "react";
import { PrimaryTable, PrimaryTableBody, PrimaryTableHead } from "../atoms/Table";
import { DataGridProps } from "../../commons/types";

export const DataGrid: FC<DataGridProps> = ({
  columnNames,
  records,
  backButton,
  frontCheckbox,
  onNumberInputChange,
  onStringInputChange,
  isDisabled = false,
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
          isDisabled={isDisabled}
        />
      }
    />
  );
};
