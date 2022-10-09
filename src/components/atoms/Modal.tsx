import { FC, ReactNode } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type PrimaryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  Body?: ReactNode;
  Foot?: ReactNode;
};

export const PrimaryModal: FC<PrimaryModalProps> = ({
  isOpen,
  onClose,
  title,
  Body,
  Foot,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "lg"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{Body}</ModalBody>
        <ModalFooter>{Foot}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
