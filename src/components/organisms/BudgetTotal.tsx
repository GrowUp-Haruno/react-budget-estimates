import { Container, Text } from "@chakra-ui/react";
import { FC } from "react";
import { BudgetTotalProps } from "../../commons/types";

export const BudgetTotal: FC<BudgetTotalProps> = ({ total }) => {
  return (
    <Container textAlign="center">
      <Text>予算合計：{total.toLocaleString("ja-JP")}円</Text>
    </Container>
  );
};
