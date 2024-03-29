import { useCallback, useEffect, useMemo, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useLiveQuery } from "dexie-react-hooks";
import { budgetDB, deleteBudgetDB, initializeBudgetDB, saveBudgetDB } from "../db/db";
import { budgetListType, budgetType, recordsType } from "../models";
import { MainContentsProps } from "../types";
import { useImmer } from "use-immer";

const maxPrice = 10000000;
const maxNameLength = 20;

export const useMainContents = (): MainContentsProps => {
  // 予算データ
  const budgets = useLiveQuery(async () => await budgetDB.budget.toArray(), []);
  // 予算カテゴリ
  const [budgetCategory, setBudgetCategory] = useState<string>("");
  // 予算詳細モーダル用のテンプレートデータ
  const [budgetModalRecords, setBudgetModalRecords] = useImmer<recordsType>([]);
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
      setBudgetCategory(budgets[index].category);
      setIsUpdate(false);
      budgetModalDisclosure.onOpen();
    },
    [budgets]
  );

  /** 予算詳細を仮削除 */
  const onBudgetDetailDelete = useCallback(
    (index: number): void => {
      setBudgetModalRecords((draftRecords) => {
        draftRecords[index].isDelete = !draftRecords[index].isDelete;
      });
      if (!isUpdate) setIsUpdate(true);
    },
    [budgetModalRecords]
  );

  /** 予算詳細を仮追加 */
  const onBudgetDetailAdd = useCallback((): void => {
    setBudgetModalRecords((draftRecords) => {
      draftRecords.push({ id: draftRecords.length, fields: ["", 0], isDelete: false });
    });
    if (!isUpdate) setIsUpdate(true);
  }, [budgetModalRecords]);

  /** 数値変更関数 */
  const onNumberInputChange = useCallback(
    (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>): void => {
      const targetValue = e.target.value.replace(/,/g, "");
      // バリデーション
      if (isNaN(Number(targetValue))) return;
      if (Number(targetValue) >= maxPrice) return;
      setBudgetModalRecords((draftRecords) => {
        draftRecords[recordIndex].fields[fieldIndex] = Number(targetValue);
      });
      if (!isUpdate) setIsUpdate(true);
    },
    [budgetModalRecords]
  );

  /** 文字変更関数 */
  const onStringInputChange = useCallback(
    (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>): void => {
      const regex = /[&'`"<>]/g;
      // バリデーション
      if (regex.test(e.target.value)) return;
      if (!(e.target.value.length <= maxNameLength)) return;

      setBudgetModalRecords((draftRecords) => {
        draftRecords[recordIndex].fields[fieldIndex] = e.target.value.replace(regex, "");
      });
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
    setBudgetModalRecords([]);
    setIsUpdate(false);
    savePopButtonDisclosure.onClose();
    budgetModalDisclosure.onClose();
  }, [updateBudgetIndex, budgetModalRecords, budgets]);

  /** 保存ポップボタンの「いいえ」を選択した場合の処理 */
  const onSaveNo = useCallback(() => {
    savePopButtonDisclosure.onClose();
  }, []);

  useEffect(() => {
    initializeBudgetDB();
  }, []);

  // データベース削除関連
  const deleteDBDisclosure = useDisclosure();
  const onYes = (): void => {
    deleteBudgetDB();
    deleteDBDisclosure.onClose();
  };
  const onNo = (): void => {
    deleteDBDisclosure.onClose();
  };

  return {
    budgetListProps: {
      budgetListRecords,
      onBudgetModalOpen,
      isDisabled: deleteDBDisclosure.isOpen,
    },
    budgetTotalProps: {
      total,
    },
    budgetModalProps: {
      budgetCategory,
      budgetModalDisclosure,
      savePopButtonDisclosure,
      budgetModalRecords,
      closePopButtonDisclosure,
      isUpdate,
      onBudgetDetailDelete,
      onBudgetDetailAdd,
      onNumberInputChange,
      onStringInputChange,
      onModalClose,
      onSaveYes,
      onSaveNo,
      onCloseYes,
      onCloseNo,
    },
    budgetDeleteProps: {
      deleteDBDisclosure,
      onYes,
      onNo,
    },
  };
};
