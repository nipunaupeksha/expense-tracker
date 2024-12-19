import { Hono } from "hono";
import { z } from "zod";

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

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const data = await c.req.json();
    const expense = createPostSchema.parse(data);
    console.log(expense);
    return c.json({ expense });
  });
// .delete()
// .put()
