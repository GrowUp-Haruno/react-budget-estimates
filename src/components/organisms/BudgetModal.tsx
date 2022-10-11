import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { PrimaryTable, PrimaryTableHead } from "../atoms/Table";
import { CloseButon } from "../molecules/Button";
import { TableBody } from "../molecules/Table";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  BudgetModalRecords: recordsType;
}> = ({ isOpen, onClose, BudgetModalRecords }) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <PrimaryTable
          Head={<PrimaryTableHead columnNames={["内容", "料金", ""]} />}
          Body={<TableBody records={BudgetModalRecords} />}
        />
      }
      Foot={<CloseButon onClick={onClose} />}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
