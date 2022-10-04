export type budgetType = {
  category: string;
  budgetDetails: Array<{
    name: string;
    price: number;
  }>;
};
