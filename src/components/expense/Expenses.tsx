import { useState } from "react";
import { Expense } from "../../App";
import "./Expenses.scss";
import Card from "../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  const [filterYear, setFilterYear] = useState("2023");

  const onFilterChange = (selectedYear: string) => {
    setFilterYear(selectedYear);
  };

  const filteredArray = expensesArray.filter(
    (expense) => expense?.date?.getFullYear()?.toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={onFilterChange}
        selectedYear={filterYear}
      />

      <ExpensesChart expenses={filteredArray} />
      <ExpensesList expenses={filteredArray} />
    </Card>
  );
};

export default Expenses;
