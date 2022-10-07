import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { budgetListType, budgetType, recordsType } from "./App.model";

export type AppType = {
  isOpen: boolean;
  onClose: () => void;
  onBadgetModalOpen: (index: number) => void;
  total: number;
  budgetListRecords: recordsType;
  BudgetModalRecords: recordsType;
};
type useAppType = () => AppType;

export const useApp: useAppType = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([
    { category: "", budgetDetails: [] },
  ]);
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

  const budgetListRecords: recordsType = budgetlist.map(
    ({ category, subtotal }, i) => ({
      id: i,
      fields: [category, subtotal.toLocaleString("ja-JP")],
    })
  );

  const total = budgetlist.reduce((total, curr) => total + curr.subtotal, 0);

  const BudgetModalRecords: recordsType = budgets[
    budgetIndex
  ].budgetDetails.map(({ name, price }, i) => ({
    id: i,
    fields: [name, price.toLocaleString("ja-JP")],
  }));

  useEffect(() => {
    setBudgets([
      { category: "移動費", budgetDetails: [{ name: "電車賃", price: 10000 }] },
      {
        category: "宿泊費",
        budgetDetails: [{ name: "アパホテル", price: 12000 }],
      },
      { category: "食費費", budgetDetails: [{ name: "夢庵", price: 2000 }] },
      { category: "観光費", budgetDetails: [{ name: "観光船", price: 1000 }] },
      {
        category: "お土産代",
        budgetDetails: [{ name: "お土産代", price: 10000 }],
      },
    ]);
  }, []);

  return {
    isOpen,
    onClose,
    onBadgetModalOpen,
    total,
    budgetListRecords,
    BudgetModalRecords,
  };
};
