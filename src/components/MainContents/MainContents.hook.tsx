import { HStack, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { budgetListType, budgetType } from "../../models/modelBadget";
import { PrimaryButto, SecondaryButton } from "../Atom/Button";

type useMainContentsType = () => {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  BudgetlistTable: JSX.Element[];
  BudgetModalTable: JSX.Element[];
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

  const BudgetlistTable = budgetlist.map((budget, i) => (
    <Tr key={budget.category}>
      <Td>{budget.category}</Td>
      <Td>{budget.subtotal.toLocaleString("ja-JP")}</Td>
      <Td isNumeric>
        <PrimaryButto onClick={() => onBadgetModalOpen(i)}>詳細</PrimaryButto>
      </Td>
    </Tr>
  ));

  const total = budgetlist.reduce((total, curr) => total + curr.subtotal, 0);

  const BudgetModalTable = budgets[budgetIndex].budgetDetails.map((detail) => (
    <Tr key={detail.name}>
      <Td>{detail.name}</Td>
      <Td>{detail.price}</Td>
      <Td isNumeric>
        <HStack justify="end">
          <PrimaryButto>変更</PrimaryButto>
          <SecondaryButton>削除</SecondaryButton>
        </HStack>
      </Td>
    </Tr>
  ));

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
    BudgetlistTable,
    BudgetModalTable,
  };
};
