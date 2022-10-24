import Dexie, { Table } from "dexie";
import { budgetType } from "../Pages/App.model";

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
          {
            id: 0,
            category: "移動費",
            budgetDetails: [
              { name: "電車賃", price: 20000 },
              { name: "電車賃2", price: 40000 },
              { name: "電車賃3", price: 60000 },
              { name: "電車賃4", price: 80000 },
            ],
          },
          { id: 1, category: "宿泊費", budgetDetails: [{ name: "アパホテル", price: 12000 }] },
          { id: 2, category: "食費費", budgetDetails: [{ name: "夢庵", price: 2000 }] },
          { id: 3, category: "観光費", budgetDetails: [{ name: "観光船", price: 1000 }] },
          { id: 4, category: "お土産代", budgetDetails: [{ name: "お土産代", price: 10000 }] },
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