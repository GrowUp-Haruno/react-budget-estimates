import { Table, TableCaption, TableContainer, Th, Tr, Td, Thead, Tbody, Tfoot, Flex, Button } from "@chakra-ui/react";
import { FC } from "react";
export const BudgetList: FC = () => {
  return (
    <Flex flexGrow={1} justifyContent='center'>
      <TableContainer>
        <Table size='lg'>
          <TableCaption>
            <Thead>
              <Tr>
                <Th>カテゴリ</Th>
                <Th>小計</Th>
                <Th>詳細リンク</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>移動費</Td>
                <Td>10,000</Td>
                <Td>リンク</Td>
              </Tr>
              <Tr>
                <Td>宿泊費</Td>
                <Td>10,000</Td>
                <Td><Button>a</Button></Td>
              </Tr>
              <Tr>
                <Td>食費費</Td>
                <Td>10,000</Td>
                <Td>リンク</Td>
              </Tr>
              <Tr>
                <Td>観光費</Td>
                <Td>10,000</Td>
                <Td>リンク</Td>
              </Tr>
              <Tr>
                <Td>お土産代</Td>
                <Td>10,000</Td>
                <Td>リンク</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>合計</Th>
                <Th>50000</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </TableCaption>
        </Table>
      </TableContainer>
    </Flex>
  );
};
