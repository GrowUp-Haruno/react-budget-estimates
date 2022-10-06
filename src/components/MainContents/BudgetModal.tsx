import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { PrimaryModal } from "../Atom/Modal";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  BudgetModalTable: ReactNode;
}> = ({ isOpen, onClose, BudgetModalTable }) => {
  return (
    <PrimaryModal
      modalTitle="予算設定"
      modalBody={
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
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
