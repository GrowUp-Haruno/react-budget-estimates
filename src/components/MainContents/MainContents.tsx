import { Stack, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BudgetList } from "./BudgetList";
import { BudgetModal } from "./BudgetModal";
import { BudgetTotal } from "./BudgetTotal";
import { budgetListType, budgetType } from "../../models/modelBadget";
import { MainContentsStyle } from "./MainContents.style";
import { onBadgetModalCloseType, onBadgetModalOpenType } from "./MainContents.type";

export const MainContents: FC = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([]);
  const [budgetIndex, setBudgetIndex] = useState<number>(0);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onBadgetModalOpen: onBadgetModalOpenType = (index) => {
    setBudgetIndex(index);
    onOpen();
  };

  const onBadgetModalClose: onBadgetModalCloseType = () => {
    setBudgetIndex(0);
    onClose();
  };

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
    <Stack {...MainContentsStyle}>
      <BudgetList budgetlist={budgetlist} onBadgetModalOpen={onBadgetModalOpen} />
      <BudgetTotal total={total} />
      <BudgetModal
        isOpen={isOpen}
        onBadgetModalClose={onBadgetModalClose}
        budgets={budgets}
        budgetIndex={budgetIndex}
      />
    </Stack>
  );
};
