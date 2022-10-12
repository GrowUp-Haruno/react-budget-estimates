import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { budgetListType, budgetType, recordsType } from "./App.model";

export type AppType = {
  isOpen: boolean;
  onClose: () => void;
  onBudgetModalOpen: (index: number) => void;
  onBudgetDetailDelete: (index: number) => void;
  total: number;
  budgetListRecords: recordsType;
  budgetModalRecords: recordsType;
};

type useAppType = () => AppType;

export const useApp: useAppType = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([{ category: "", budgetDetails: [] }]);
  const [budgetIndex, setBudgetIndex] = useState<number>(0);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onBudgetModalOpen = (index: number): void => {
    setBudgetIndex(index);
    onOpen();
  };

  /** 予算詳細を削除 */
  const onBudgetDetailDelete = (index: number): void => {
    const newBudget = budgets;
    // newBudget[budgetIndex].budgetDetails.splice(index, 1);
    newBudget[budgetIndex].budgetDetails[index].isDelete = !newBudget[budgetIndex].budgetDetails[index].isDelete;
    setBudgets([...newBudget]);
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
    fields: [category, subtotal.toLocaleString("ja-JP")],
    isDelete: false,
    isUpdate: false,
    isChange: false,
  }));

  const total = budgetlist.reduce((total, curr) => total + curr.subtotal, 0);

  const budgetModalRecords: recordsType = budgets[budgetIndex].budgetDetails.map(
    ({ name, price, isChange, isDelete, isUpdate }, i) => ({
      id: i,
      fields: [name, price.toLocaleString("ja-JP")],
      isDelete,
      isUpdate,
      isChange,
    })
  );

  useEffect(() => {
    setBudgets([
      {
        category: "移動費",
        budgetDetails: [
          { name: "電車賃", price: 10000, isChange: false, isDelete: false, isUpdate: false },
          { name: "電車賃2", price: 20000, isChange: false, isDelete: false, isUpdate: false },
          { name: "電車賃3", price: 30000, isChange: false, isDelete: false, isUpdate: false },
          { name: "電車賃4", price: 40000, isChange: false, isDelete: false, isUpdate: false },
        ],
      },
      {
        category: "宿泊費",
        budgetDetails: [{ name: "アパホテル", price: 12000, isChange: false, isDelete: false, isUpdate: false }],
      },
      {
        category: "食費費",
        budgetDetails: [{ name: "夢庵", price: 2000, isChange: false, isDelete: false, isUpdate: false }],
      },
      {
        category: "観光費",
        budgetDetails: [{ name: "観光船", price: 1000, isChange: false, isDelete: false, isUpdate: false }],
      },
      {
        category: "お土産代",
        budgetDetails: [{ name: "お土産代", price: 10000, isChange: false, isDelete: false, isUpdate: false }],
      },
    ]);
  }, []);

  return {
    isOpen,
    onClose,
    onBudgetModalOpen,
    onBudgetDetailDelete,
    total,
    budgetListRecords,
    budgetModalRecords,
  };
};
