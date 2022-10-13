import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { budgetListType, budgetType, recordsType } from "./App.model";

export type AppType = {
  isOpen: boolean;
  onClose: () => void;
  onBudgetModalOpen: (index: number) => void;
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  onBudgetDetailChange: (index: number) => void;
  total: number;
  budgetListRecords: recordsType;
  budgetModalRecords: recordsType;
};

type useAppType = () => AppType;

export const useApp: useAppType = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([{ category: "", budgetDetails: [] }]);
  const [budgetModalRecords, setBudgetModalRecords] = useState<recordsType>([]);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const onBudgetModalOpen = (index: number): void => {
    const newRecords: recordsType = budgets[index].budgetDetails.map(({ name, price }, i) => ({
      id: i,
      fields: [name, price.toLocaleString("ja-JP")],
      isDelete: false,
      isChange: false,
    }));
    setBudgetModalRecords([...newRecords]);
    onOpen();
  };

  /** 予算詳細を仮削除 */
  const onBudgetDetailDelete = (index: number): void => {
    const newRecords: recordsType = budgetModalRecords;
    newRecords[index].isDelete = !newRecords[index].isDelete;
    setBudgetModalRecords([...newRecords]);
  };

  /** 予算詳細を仮追加 */
  const onBudgetDetailAdd = (): void => {
    const newRecords: recordsType = budgetModalRecords;
    newRecords.push({ id: newRecords.length, fields: ["", "0"], isDelete: false, isChange: true });
    setBudgetModalRecords([...newRecords]);
  };

  /** 予算詳細を仮変更 */
  const onBudgetDetailChange = (index: number): void => {
    const newRecords: recordsType = budgetModalRecords;
    newRecords[index].isChange = !newRecords[index].isChange;
    setBudgetModalRecords([...newRecords]);
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

  useEffect(() => {
    setBudgets([
      {
        category: "移動費",
        budgetDetails: [
          { name: "電車賃", price: 10000 },
          { name: "電車賃2", price: 20000 },
          { name: "電車賃3", price: 30000 },
          { name: "電車賃4", price: 40000 },
        ],
      },
      { category: "宿泊費", budgetDetails: [{ name: "アパホテル", price: 12000 }] },
      { category: "食費費", budgetDetails: [{ name: "夢庵", price: 2000 }] },
      { category: "観光費", budgetDetails: [{ name: "観光船", price: 1000 }] },
      { category: "お土産代", budgetDetails: [{ name: "お土産代", price: 10000 }] },
    ]);
  }, []);

  return {
    isOpen,
    onClose,
    onBudgetModalOpen,
    onBudgetDetailDelete,
    onBudgetDetailAdd,
    onBudgetDetailChange,
    total,
    budgetListRecords,
    budgetModalRecords,
  };
};
