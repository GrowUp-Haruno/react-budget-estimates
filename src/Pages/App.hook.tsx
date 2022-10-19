import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { budgetListType, budgetType, recordsType } from "./App.model";

const maxPrice = 10000000;
const maxNameLength = 20;

export type AppType = {
  onBudgetModalOpen: (index: number) => void;
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  yesCallback: () => void;
  noCallback: () => void;
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  total: number;
  budgetListRecords: recordsType;
  budgetModalRecords: recordsType;
  budgetModalDisclosure: UseDisclosureReturn;
  closePopButtonDisclosure: UseDisclosureReturn;
};

type useAppType = () => AppType;

export const useApp: useAppType = () => {
  const [budgets, setBudgets] = useState<budgetType[]>([{ category: "", budgetDetails: [] }]);
  const [budgetModalRecords, setBudgetModalRecords] = useState<recordsType>([]);
  const budgetModalDisclosure = useDisclosure();
  const closePopButtonDisclosure = useDisclosure();

  /** 予算詳細モーダルの表示処理 */
  const onBudgetModalOpen = useCallback(
    (index: number): void => {
      const newRecords: recordsType = budgets[index].budgetDetails.map(({ name, price }, i) => ({
        id: i,
        fields: [name, price],
        isDelete: false,
        isChange: false,
      }));
      setBudgetModalRecords([...newRecords]);
      budgetModalDisclosure.onOpen();
    },
    [budgets]
  );

  /** 予算詳細を仮削除 */
  const onBudgetDetailDelete = useCallback(
    (index: number): void => {
      const newRecords: recordsType = budgetModalRecords.slice();
      newRecords[index].isDelete = !newRecords[index].isDelete;
      setBudgetModalRecords([...newRecords]);
    },
    [budgetModalRecords]
  );

  /** 予算詳細を仮追加 */
  const onBudgetDetailAdd = useCallback((): void => {
    const newRecords: recordsType = budgetModalRecords.slice();
    newRecords.push({ id: newRecords.length, fields: ["", 0], isDelete: false });
    setBudgetModalRecords([...newRecords]);
  }, [budgetModalRecords]);

  /** 数値変更関数 */
  const onNumberInputChange = useCallback(
    (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>): void => {
      const newRecords: recordsType = budgetModalRecords.slice();
      const targetValue = e.target.value.replace(/,/g, "");
      // バリデーション
      if (isNaN(Number(targetValue))) return;
      if (Number(targetValue) >= maxPrice) return;

      newRecords[recordIndex].fields[fieldIndex] = Number(targetValue);
      setBudgetModalRecords([...newRecords]);
    },
    [budgetModalRecords]
  );

  /** 文字変更関数 */
  const onStringInputChange = useCallback(
    (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>): void => {
      const newRecords: recordsType = budgetModalRecords.slice();
      const regex = /[&'`"<>]/g;
      // バリデーション
      if (regex.test(e.target.value)) return;
      if (!(e.target.value.length <= maxNameLength)) return;

      newRecords[recordIndex].fields[fieldIndex] = e.target.value.replace(regex, "");
      setBudgetModalRecords([...newRecords]);
    },
    [budgetModalRecords]
  );

  const budgetlist = useMemo<budgetListType>(
    () =>
      budgets.map((budget) =>
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
      ),
    [budgets]
  );

  const budgetListRecords: recordsType = useMemo<recordsType>(
    () =>
      budgetlist.map(({ category, subtotal }, i) => ({
        id: i,
        fields: [category, subtotal.toLocaleString("ja-JP")],
        isDelete: false,
        isUpdate: false,
        isChange: false,
      })),
    [budgetlist]
  );

  const total = useMemo<number>(() => budgetlist.reduce((total, curr) => total + curr.subtotal, 0), [budgetlist]);

  const yesCallback = useCallback(() => {
    // 更新処理
    closePopButtonDisclosure.onClose();
    budgetModalDisclosure.onClose();
  }, []);
  
  const noCallback = useCallback(() => {
    closePopButtonDisclosure.onClose();
    budgetModalDisclosure.onClose();
  }, []);

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
    budgetModalDisclosure,
    onBudgetModalOpen,
    onBudgetDetailDelete,
    onBudgetDetailAdd,
    onNumberInputChange,
    onStringInputChange,
    total,
    budgetListRecords,
    budgetModalRecords,
    closePopButtonDisclosure,
    yesCallback,
    noCallback,
  };
};
