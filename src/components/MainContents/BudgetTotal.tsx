import { Container, Text } from "@chakra-ui/react";
import { FC } from "react";

export const BudgetTotal: FC<{ total: number }> = ({ total }) => {
  return (
    <Container textAlign='center'>
      <Text>予算合計：{total.toLocaleString("ja-JP")}円</Text>
    </Container>
  );
};
