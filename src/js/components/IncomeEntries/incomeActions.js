export const updateIncomeDescription = (description) => {
  return {
    type: "UPDATE_INCOME_DESCRIPTION",
    payload: { description }
  };
}

export const updateIncomeAmount = (amount) => {
  return {
    type: "UPDATE_INCOME_AMOUNT",
    payload: { amount }
  };
}

export const addIncome = ( description, amount) => {
  return {
    type: "ADD_INCOME",
    payload: {
      description,
      amount: parseFloat(amount)
    }
  };
}