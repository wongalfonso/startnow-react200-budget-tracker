import { combineReducers } from "redux";
import ExpenseReducer from "./components/ExpenseEntries/expenseReducer";
import IncomeReducer from "./components/IncomeEntries/incomeReducer";

const rootReducer = combineReducers({
  expense: ExpenseReducer,
  income: IncomeReducer
});

export default rootReducer;