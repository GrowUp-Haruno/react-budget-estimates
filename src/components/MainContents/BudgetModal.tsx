import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { PrimaryButto } from "../Atom/Button";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  BudgetModalTable: ReactNode;
}> = ({ isOpen, onClose, BudgetModalTable }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "lg"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>予算設定</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table size={["sm", "md", "lg"]}>
              <Thead>
                <Tr>
                  <Th>内容</Th>
                  <Th>料金</Th>
                  <Th isNumeric></Th>
                </Tr>
              </Thead>
              <Tbody>{BudgetModalTable}</Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
        <ModalFooter>
          <PrimaryButto onClick={onClose}>閉じる</PrimaryButto>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
