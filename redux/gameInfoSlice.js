import { createSlice } from "@reduxjs/toolkit";

export const gameInfoSlice = createSlice({
  name: "gameInfoSlice",
  initialState: {
    salary: 0,
    passiveIncome: 0,
    totalIncome: 0,
    totalExpenses: 0,
    cashflow: 0,
    taxes: 0,
    homeMortgagePayment: 0,
    schoolLoanPayment: 0,
    carLoanPayment: 0,
    creditCardPayment: 0,
    otherExpenses: 0,
    perChildExpense: 0,
    numOfChildren: 0,
    bankLoanPayment: 0,
    bankLoan: 0,
    businesses: []
  },
  reducers: {
    setSalary: (state, action) => {
      state.salary = action.payload;
      gameInfoSlice.caseReducers.setTotalIncome(state);
    },
    setPassiveIncome: (state, action) => {
      state.passiveIncome = action.payload;
    },
    setTotalIncome: (state, action) => {
      state.totalIncome = state.salary + state.passiveIncome;
    },
    setTotalExpenses: (state, action) => {
      state.totalExpenses =
        state.taxes +
        state.homeMortgagePayment +
        state.schoolLoanPayment +
        state.carLoanPayment +
        state.creditCardPayment +
        state.otherExpenses +
        state.perChildExpense * state.numOfChildren +
        state.bankLoanPayment;
      gameInfoSlice.caseReducers.setCashflow(state);
    },
    setCashflow: (state, action) => {
      state.cashflow = state.totalIncome - state.totalExpenses;
    },
    setTaxes: (state, action) => {
      state.taxes = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setHomeMortgagePayment: (state, action) => {
      state.homeMortgagePayment = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setSchoolLoanPayment: (state, action) => {
      state.schoolLoanPayment = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setCarLoanPayment: (state, action) => {
      state.carLoanPayment = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setCreditCardPayment: (state, action) => {
      state.creditCardPayment = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setOtherExpenses: (state, action) => {
      state.otherExpenses = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setPerChildExpense: (state, action) => {
      state.perChildExpense = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setNumOfChildren: (state, action) => {
      state.numOfChildren = action.payload;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setBankLoanPayment: (state, action) => {
      state.bankLoanPayment = state.bankLoan * 0.1;
      gameInfoSlice.caseReducers.setTotalExpenses(state);
    },
    setBankLoan: (state, action) => {
      state.bankLoan = action.payload;
      gameInfoSlice.caseReducers.setBankLoanPayment(state);
    },
    addBusiness: (state, action) => {
      state.businesses.push(action.payload);
    },
    removeBusiness: (state, action) => {

    }
    //Add edit business details functions
  },
});

// Action creators are generated for each case reducer function
export const {
  setSalary,
  setPassiveIncome,
  setTotalIncome,
  setTotalExpenses,
  setCashflow,
  setTaxes,
  setHomeMortgagePayment,
  setSchoolLoanPayment,
  setCarLoanPayment,
  setCreditCardPayment,
  setOtherExpenses,
  setPerChildExpense,
  setNumOfChildren,
  setBankLoan,
  setBankLoanPayment,
  businesses
} = gameInfoSlice.actions;

export default gameInfoSlice.reducer;
