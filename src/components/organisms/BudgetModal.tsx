import { VStack, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetModalProps } from "../../Pages/App.hook";
import { PrimaryModal } from "../atoms/Modal";
import { AddButton, CloseButton, ClosePopButton, SavePopButton } from "../molecules/CustomButton";
import { DeleteCheckbox } from "../molecules/CustomCheckbox";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<BudgetModalProps> = ({
  onBudgetDetailDelete,
  onBudgetDetailAdd,
  onNumberInputChange,
  onStringInputChange,
  onModalClose,
  budgetModalRecords,
  closePopButtonDisclosure,
  savePopButtonDisclosure,
  budgetModalDisclosure,
  onCloseYes = () => {},
  onCloseNo = () => {},
  onSaveYes = () => {},
  onSaveNo = () => {},
  isUpdate,
}) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <VStack spacing={8}>
          <DataGrid
            columnNames={["削除", "内容", "料金"]}
            records={budgetModalRecords}
            frontCheckbox={{ Component: DeleteCheckbox, callback: onBudgetDetailDelete }}
            onNumberInputChange={onNumberInputChange}
            onStringInputChange={onStringInputChange}
            isDisabled={closePopButtonDisclosure.isOpen || savePopButtonDisclosure.isOpen}
          />
          <AddButton
            onClick={onBudgetDetailAdd}
            w="full"
            isDisabled={closePopButtonDisclosure.isOpen || savePopButtonDisclosure.isOpen}
          />
        </VStack>
      }
      Foot={
        isUpdate ? (
          <HStack w="full">
            <SavePopButton
              onYes={onSaveYes}
              onNo={onSaveNo}
              savePopButtonDisclosure={savePopButtonDisclosure}
              isDisabled={closePopButtonDisclosure.isOpen}
            />
            <ClosePopButton
              onYes={onCloseYes}
              onNo={onCloseNo}
              closePopButtonDisclosure={closePopButtonDisclosure}
              isDisabled={savePopButtonDisclosure.isOpen}
            />
          </HStack>
        ) : (
          <CloseButton onClick={onModalClose} w="full" />
        )
      }
      modalDisclosure={budgetModalDisclosure}
      isModalCloseBUtton
    />
  );
};
