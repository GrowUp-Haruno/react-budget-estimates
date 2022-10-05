import { Text } from "@chakra-ui/react";
import { FC } from "react";

export const BudgetTotal: FC<{ total: number }> = ({ total }) => {
  return <Text>予算合計：{total.toLocaleString("ja-JP")}円</Text>;
};
