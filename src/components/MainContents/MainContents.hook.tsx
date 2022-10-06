import { HStack, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { budgetListType, budgetType, recordsType } from "../../models/modelBadget";
import { PrimaryButto, SecondaryButton } from "../Atom/Button";

type useMainContentsType = () => {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  budgetListRecords: recordsType;
  BudgetModalRecords: recordsType;
};

export const useMainContents: useMainContentsType = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([{ category: "", budgetDetails: [] }]);
  const [budgetIndex, setBudgetIndex] = useState<number>(0);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onBadgetModalOpen = (index: number): void => {
    setBudgetIndex(index);
    onOpen();
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

  const budgetListRecords: recordsType = budgetlist.map(({ category, subtotal }, i) => ({
    id: i,
    fields: [
      category,
      subtotal,
      <PrimaryButto key={category} onClick={() => onBadgetModalOpen(i)}>
        詳細
      </PrimaryButto>,
    ],
  }));

  const total = budgetlist.reduce((total, curr) => total + curr.subtotal, 0);

  const BudgetModalRecords: recordsType = budgets[budgetIndex].budgetDetails.map(({ name, price }, i) => ({
    id: i,
    fields: [
      name,
      price,
      <HStack key={i} justify="end">
        <PrimaryButto>変更</PrimaryButto>
        <SecondaryButton>削除</SecondaryButton>
      </HStack>,
    ],
  }));

  useEffect(() => {
    setBudgets([
      { category: "移動費", budgetDetails: [{ name: "電車賃", price: 10000 }] },
      { category: "宿泊費", budgetDetails: [{ name: "アパホテル", price: 12000 }] },
      { category: "食費費", budgetDetails: [{ name: "夢庵", price: 2000 }] },
      { category: "観光費", budgetDetails: [{ name: "観光船", price: 1000 }] },
      { category: "お土産代", budgetDetails: [{ name: "お土産代", price: 10000 }] },
    ]);
  }, []);

  return {
    isOpen,
    onClose,
    total,
    budgetListRecords,
    BudgetModalRecords,
  };
};
