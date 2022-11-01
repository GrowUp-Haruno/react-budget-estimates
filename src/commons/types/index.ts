import { FC, ReactNode } from "react";
import { ButtonProps, CheckboxProps, ComponentWithAs, InputProps, UseDisclosureReturn } from "@chakra-ui/react";
import { recordsType } from "../models";

export type BudgetListProps = {
  budgetListRecords: recordsType;
  onBudgetModalOpen: (index: number) => void;
  isDisabled: boolean;
};

export type BudgetTotalProps = {
  total: number;
};

export type BudgetModalProps = {
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  onModalClose: () => void;
  onCloseYes: () => void;
  onCloseNo: () => void;
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveYes: () => void;
  onSaveNo: () => void;
  budgetModalRecords: recordsType;
  budgetModalDisclosure: UseDisclosureReturn;
  closePopButtonDisclosure: UseDisclosureReturn;
  savePopButtonDisclosure: UseDisclosureReturn;
  isUpdate: boolean;
  budgetCategory: string;
};

export type BudgetDeleteProps = {
  onYes?: () => void;
  onNo?: () => void;
  deleteDBDisclosure: UseDisclosureReturn;
  isDisabled?: boolean;
};

export type ReloadModalProps = {
  reloadModalDisclosure: UseDisclosureReturn;
  onUpdateOk?: () => void;
};

export type MainContentsProps = {
  budgetListProps: BudgetListProps;
  budgetTotalProps: BudgetTotalProps;
  budgetModalProps: BudgetModalProps;
  budgetDeleteProps: BudgetDeleteProps;
};

export type ReloadPromptProps = {
  onUpdateOk: () => void;
  reloadModalDisclosure: UseDisclosureReturn;
};

export type DataGridProps = {
  columnNames: string[];
  records: recordsType;
  frontCheckbox?: {
    Component: FC<{ onChange?: () => void }>;
    callback: (arg: number) => void;
  };
  backButton?: {
    Component: FC<CustomButtonProps>;
    callback: (arg: number) => void;
  };
  onNumberInputChange?: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange?: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};

export type DeleteCheckboxProps = { onChange?: () => void };

export type PrimaryModalProps = {
  modalDisclosure: UseDisclosureReturn;
  title?: string;
  Body?: ReactNode;
  Foot?: ReactNode;
  isModalCloseBUtton?: true;
};

export type LayoutProps = { children: ReactNode };

export type BaseInputProps = Omit<InputProps, "size" | "variant">;

export type PrimaryInputProps = Omit<BaseInputProps, "bg" | "color" | "bgColor"> & { isDelete?: boolean };

export type PrimaryDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  Body?: ReactNode;
  Foot?: ReactNode;
};

export type BaseCheckboxProps = Omit<CheckboxProps, "size">;
export type PrimaryCheckboxProps = Omit<BaseCheckboxProps, "colorScheme">;

export type BaseButtonProps = Omit<ButtonProps, "size">;
export type PrimaryButtonProps = Omit<BaseButtonProps, "colorScheme">;
export type CustomButtonProps = Omit<PrimaryButtonProps, "children">;

export type PrimaryPopButtonProps = {
  TriggerButton: ComponentWithAs<"button", Omit<ButtonProps, "children" | "colorScheme">>;
  footerButtons: Array<{ Component: FC<{ onClick?: ButtonProps["onClick"] }>; callback: () => void }>;
  title: string;
  message: string;
  popButtonDisclosure: UseDisclosureReturn;
  isDisabled?: boolean;
};

export type PopButtonProps = {
  onYes?: () => void;
  onNo?: () => void;
  disclosure: UseDisclosureReturn;
  isDisabled?: boolean;
};

export type PrimaryTableProps = {
  Head: ReactNode;
  Body: ReactNode;
};
export type PrimaryTableHeadProps = { columnNames: string[] };
export type PrimaryTableBodyProps = {
  records: recordsType;
  frontCheckbox?: {
    Component: FC<{ onChange?: () => void; isChecked: boolean; isDisabled: boolean }>;
    callback: (arg: number) => void;
  };
  backButton?: {
    Component: FC<CustomButtonProps>;
    callback: (arg: number) => void;
  };
  onNumberInputChange?: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange?: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};
