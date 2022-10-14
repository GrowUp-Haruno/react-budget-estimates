export type budgetType = {
  category: string;
  budgetDetails: Array<{
    name: string;
    price: number;
  }>;
};

export type budgetListType = Array<{
  category: string;
  subtotal: number;
}>;

export type recordsType = Array<{
  id: number;
  fields: Array<string | number>;
  isDelete: boolean;
  isChange: boolean;
}>;
