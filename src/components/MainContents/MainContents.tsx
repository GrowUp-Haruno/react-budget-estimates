import { Stack, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BudgetList } from "../BudgetList/BudgetList";
import { budgetListType, budgetType } from "./MainContents.model";

export const MainContents: FC = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([]);

  const budgetlist: budgetListType = budgets.map((budget) =>
    budget.budgetDetails.reduce(
      (newObj: { category: string; subtotal: number }, curr) => ({
        ...newObj,
        subtotal: newObj.subtotal + curr.price,
      }),
      {
        category: budget.category,
        subtotal: 0,
      }
    )
  );
  const total = budgetlist.reduce((total, curr) => total + curr.subtotal, 0);

  useEffect(() => {
    setBudgets([
      { category: "移動費", budgetDetails: [{ name: "電車賃", price: 10000 }] },
      { category: "宿泊費", budgetDetails: [{ name: "アパホテル", price: 12000 }] },
      { category: "食費費", budgetDetails: [{ name: "夢庵", price: 2000 }] },
      { category: "観光費", budgetDetails: [{ name: "観光船", price: 1000 }] },
      { category: "お土産代", budgetDetails: [{ name: "お土産代", price: 10000 }] },
    ]);
  }, []);

  return (
    <Stack as="main" flexGrow={1} justifyContent="start" alignItems="center" spacing={8}>
      <BudgetList budgetlist={budgetlist} />
      <Text>予算合計：{total.toLocaleString("ja-JP")}円</Text>
    </Stack>
  );
};
