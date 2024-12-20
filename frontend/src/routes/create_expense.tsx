import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create_expense")({
  component: About,
});

function About() {
  return <div className="p-2">Hello /create-expense</div>;
}
