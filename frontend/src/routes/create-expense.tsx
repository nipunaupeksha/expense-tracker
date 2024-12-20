import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/create-expense")({
  component: CreateExpenses,
});

function CreateExpenses() {
  return (
    <div className="p-2">
      <h2>Create Expense</h2>
      <form className="max-w-xl m-auto">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Title" />
        <Label htmlFor="amount">Amount</Label>
        <Input type="text" id="amount" placeholder="Amount" />
        <Button type="submit">Create Expense</Button>
      </form>
    </div>
  );
}
