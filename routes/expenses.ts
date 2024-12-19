import { Hono } from "hono";

type Expense = {
  id: number;
  title: string;
  amount: number;
};

const fakeExpenses: Expense[] = [
  { id: 1, title: "Groceries", amount: 50.25 },
  { id: 2, title: "Electricity Bill", amount: 75.0 },
  { id: 3, title: "Internet Bill", amount: 45.99 },
  { id: 4, title: "Rent", amount: 1200.0 },
  { id: 5, title: "Gym Membership", amount: 35.0 },
];

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const expense = await c.req.json();
    console.log(expense);
    return c.json({expense});
  });
// .delete()
// .put()
