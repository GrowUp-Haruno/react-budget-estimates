import { FC, ReactNode } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureReturn,
} from "@chakra-ui/react";

type PrimaryModalProps = {
  modalDisclosure: UseDisclosureReturn;
  title?: string;
  Body?: ReactNode;
  Foot?: ReactNode;
  isModalCloseBUtton?: true;
};

export const PrimaryModal: FC<PrimaryModalProps> = ({ modalDisclosure, title, Body, Foot, isModalCloseBUtton }) => {
  const { isOpen, onClose } = modalDisclosure;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["full", "full", "2xl"]}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {isModalCloseBUtton ? <ModalCloseButton/> : <></>}
        <ModalBody>{Body}</ModalBody>
        <ModalFooter>{Foot}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
