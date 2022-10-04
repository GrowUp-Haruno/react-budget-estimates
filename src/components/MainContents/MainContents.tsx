import { Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BudgetList } from "../BudgetList/BudgetList";
import { budgetType } from "./MainContents.model";

export const MainContents: FC = () => {
  const [budgetList, setBudgetList] = useState<budgetType[]>([]);
  useEffect(() => {
    setBudgetList([
      { category: "移動費", budgetDetails: [{ name: "電車賃", price: 10000 }] },
      { category: "宿泊費", budgetDetails: [{ name: "アパホテル", price: 12000 }] },
      { category: "食費費", budgetDetails: [{ name: "夢庵", price: 2000 }] },
      { category: "観光費", budgetDetails: [{ name: "観光船", price: 1000 }] },
      { category: "お土産代", budgetDetails: [{ name: "お土産代", price: 10000 }] },
    ]);
  }, []);

  return (
    <Flex as="main" flexGrow={1} justifyContent="center">
      <BudgetList budgetList={budgetList} />
    </Flex>
  );
};
