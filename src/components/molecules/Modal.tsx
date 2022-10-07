import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { PrimaryButton } from "./Button";

export const PrimaryModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  modalBody: ReactNode;
}> = ({ isOpen, onClose, modalTitle, modalBody }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "lg"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>
          <PrimaryButton onClick={onClose}>閉じる</PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
