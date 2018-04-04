const defaultState = {
  description: "",
  amount: 0,
  lineItems: []
};

export default function IncomeReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "UPDATE_INCOME_DESCRIPTION": {
        return {
          ...state,
          description: payload.description
        };
      }
  
      case "UPDATE_INCOME_AMOUNT" : {
        return {
          ...state,
          amount: payload.amount
        };
      }
  
      case "ADD_INCOME": {
        const { description, amount } = action.payload;
        return {
          description: "",
          amount: 0,
          lineItems: [
            ...state.lineItems,
            {description, amount}
          ]
        };
      }
      default: {
        return state;    
      }
    }
  }