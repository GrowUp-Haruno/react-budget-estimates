import Dexie, { Table } from "dexie";
import { budgetType } from "../models";

class BudgetDexie extends Dexie {
  budget!: Table<budgetType>;

  constructor() {
    super("BudgetDB");
    this.version(1).stores({
      budget: "id,category, budgetDetails",
    });
  }
}

export const budgetDB = new BudgetDexie();

export const initializeBudgetDB = (): void => {
  budgetDB
    .transaction("rw", budgetDB.budget, async () => {
      const resultbudget = await budgetDB.budget.toArray();

      if (resultbudget.length === 0)
        await budgetDB.budget.bulkAdd([
          { id: 0, category: "移動費", budgetDetails: [{ name: "", price: 0 }] },
          { id: 1, category: "宿泊費", budgetDetails: [{ name: "", price: 0 }] },
          { id: 2, category: "食費", budgetDetails: [{ name: "", price: 0 }] },
          { id: 3, category: "観光費", budgetDetails: [{ name: "", price: 0 }] },
          { id: 4, category: "お土産代", budgetDetails: [{ name: "", price: 0 }] },
        ]);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const saveBudgetDB = (item: budgetType): void => {
  budgetDB
    .transaction("rw", budgetDB.budget, async () => {
      await budgetDB.budget.put(item);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteBudgetDB = (): void => {
  budgetDB
    .transaction("rw", budgetDB.budget, async () => {
      await budgetDB.budget.bulkPut([
        { id: 0, category: "移動費", budgetDetails: [{ name: "", price: 0 }] },
        { id: 1, category: "宿泊費", budgetDetails: [{ name: "", price: 0 }] },
        { id: 2, category: "食費", budgetDetails: [{ name: "", price: 0 }] },
        { id: 3, category: "観光費", budgetDetails: [{ name: "", price: 0 }] },
        { id: 4, category: "お土産代", budgetDetails: [{ name: "", price: 0 }] },
      ]);
    })
    .catch((error) => {
      console.log(error);
    });
};
