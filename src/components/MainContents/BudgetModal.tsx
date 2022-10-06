import { FC } from "react";
import { recordsType } from "../../models/modelBadget";
import { PrimaryModal } from "../Atom/Modal";
import { PrimaryTable } from "../Atom/Table";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  BudgetModalRecords: recordsType;
  // BudgetModalTable: ReactNode;
}> = ({ isOpen, onClose, BudgetModalRecords }) => {
  return (
    <PrimaryModal
      modalTitle="予算設定"
      modalBody={<PrimaryTable columnNames={["内容", "料金", ""]} records={BudgetModalRecords} />}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
