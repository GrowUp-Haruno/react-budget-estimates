import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { budgetDB, initializeBudgetDB, saveBudgetDB } from "../db/db";
import { budgetListType, budgetType, recordsType } from "./App.model";
import { useLiveQuery } from "dexie-react-hooks";

const maxPrice = 10000000;
const maxNameLength = 20;

export type AppType = {
  onBudgetModalOpen: (index: number) => void;
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  onModalClose: () => void;
  onCloseYes: () => void;
  onCloseNo: () => void;
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveYes: () => void;
  onSaveNo: () => void;
  total: number;
  budgetListRecords: recordsType;
  budgetModalRecords: recordsType;
  budgetModalDisclosure: UseDisclosureReturn;
  closePopButtonDisclosure: UseDisclosureReturn;
  savePopButtonDisclosure: UseDisclosureReturn;
  isUpdate: boolean;
};

type useAppType = () => AppType;

export const useApp: useAppType = () => {
  // 予算データ
  // const [budgets, setBudgets] = useState<budgetType[]>();
  const budgets = useLiveQuery(async () => await budgetDB.budget.toArray(), []);
  // 予算詳細モーダル用のテンプレートデータ
  const [budgetModalRecords, setBudgetModalRecords] = useState<recordsType>([]);
  // 更新するbudgetsのインデックス
  const [updateBudgetIndex, setUpdateBudgetIndex] = useState<number | undefined>();
  // 予算変更の更新フラグ
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  // 予算モーダルの開閉ロジック
  const budgetModalDisclosure = useDisclosure();
  // 閉じるポップボタンの開閉ロジック
  const closePopButtonDisclosure = useDisclosure();
  // 保存ポップボタンの開閉ロジック
  const savePopButtonDisclosure = useDisclosure();

  /** 予算詳細モーダルの表示処理 */
  const onBudgetModalOpen = useCallback(
    (index: number): void => {
      if (budgets === undefined) return;
      const newRecords: recordsType = budgets[index].budgetDetails.map(({ name, price }, i) => ({
        id: i,
        fields: [name, price],
        isDelete: false,
      }));
      setBudgetModalRecords([...newRecords]);
      setUpdateBudgetIndex(index);
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
      if (!isUpdate) setIsUpdate(true);
    },
    [budgetModalRecords]
  );

  /** 予算詳細を仮追加 */
  const onBudgetDetailAdd = useCallback((): void => {
    const newRecords: recordsType = budgetModalRecords.slice();
    newRecords.push({ id: newRecords.length, fields: ["", 0], isDelete: false });
    setBudgetModalRecords([...newRecords]);
    if (!isUpdate) setIsUpdate(true);
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
      if (!isUpdate) setIsUpdate(true);
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
      if (!isUpdate) setIsUpdate(true);
    },
    [budgetModalRecords]
  );

  /** カテゴリ別予算リスト */
  const budgetlist = useMemo<budgetListType | undefined>(() => {
    if (budgets === undefined) return undefined;
    return budgets.map((budget) =>
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
  }, [budgets]);

  /** カテゴリ別予算レコード */
  const budgetListRecords = useMemo<recordsType>(() => {
    if (budgetlist === undefined) return [];
    return budgetlist.map(({ category, subtotal }, i) => ({
      id: i,
      fields: [category, subtotal.toLocaleString("ja-JP")],
      isDelete: false,
    }));
  }, [budgetlist]);

  /** 予算合計 */
  const total = useMemo<number>(() => {
    if (budgetlist === undefined) return 0;
    return budgetlist.reduce((total, curr) => total + curr.subtotal, 0);
  }, [budgetlist]);

  /** 閉じるポップボタンの「はい」を選択した場合の処理 */
  const onCloseYes = useCallback(() => {
    closePopButtonDisclosure.onClose();
    setBudgetModalRecords([]);
    setIsUpdate(false);
    budgetModalDisclosure.onClose();
  }, []);

  /** 閉じるポップボタンの「いいえ」を選択した場合の処理 */
  const onCloseNo = useCallback(() => {
    closePopButtonDisclosure.onClose();
  }, []);

  /** 閉じるボタン（未編集時）を押した場合の処理 */
  const onModalClose = useCallback(() => {
    setBudgetModalRecords([]);
    budgetModalDisclosure.onClose();
  }, []);

  /** 保存ポップボタンの「はい」を選択した場合の処理 */
  const onSaveYes = useCallback(() => {
    if (updateBudgetIndex === undefined) return;
    if (budgets === undefined) return;
    const tempBudgets: budgetType[] = budgets.slice();
    const undeleteBudgetModalRecords = budgetModalRecords.filter((record) => !record.isDelete);
    const newBudgetDetails = undeleteBudgetModalRecords.map((record) => {
      return { name: record.fields[0].toString(), price: Number(record.fields[1]) };
    });
    tempBudgets[updateBudgetIndex].budgetDetails = newBudgetDetails;
    saveBudgetDB(tempBudgets[updateBudgetIndex]);
    setBudgetModalRecords([...undeleteBudgetModalRecords]);
    setIsUpdate(false);
    savePopButtonDisclosure.onClose();
  }, [updateBudgetIndex, budgetModalRecords, budgets]);

  /** 保存ポップボタンの「いいえ」を選択した場合の処理 */
  const onSaveNo = useCallback(() => {
    savePopButtonDisclosure.onClose();
  }, []);

  useEffect(() => {
    initializeBudgetDB();
  }, []);

  return {
    budgetModalDisclosure,
    savePopButtonDisclosure,
    onBudgetModalOpen,
    onBudgetDetailDelete,
    onBudgetDetailAdd,
    onNumberInputChange,
    onStringInputChange,
    onModalClose,
    onSaveYes,
    onSaveNo,
    total,
    budgetListRecords,
    budgetModalRecords,
    closePopButtonDisclosure,
    onCloseYes,
    onCloseNo,
    isUpdate,
  };
};
