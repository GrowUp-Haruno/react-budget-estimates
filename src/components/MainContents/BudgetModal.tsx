import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { budgetType } from "../../models/modelBadget";
import { onBadgetModalCloseType } from "./MainContents.type";

export const BudgetModal: FC<{
  isOpen: boolean;
  onBadgetModalClose: onBadgetModalCloseType;
  budgets: budgetType[];
  budgetIndex: number;
}> = ({ isOpen, onBadgetModalClose,budgets,budgetIndex }) => {
  console.log(budgets[budgetIndex]);
  return (
    <Modal isOpen={isOpen} onClose={onBadgetModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>予算設定</ModalHeader>
        <ModalCloseButton />
        <ModalBody>test</ModalBody>
        <ModalFooter>
          <Button onClick={onBadgetModalClose}>閉じる</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
