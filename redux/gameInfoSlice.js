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
  },
  reducers: {
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
    setPassiveIncome: (state, action) => {
      state.passiveIncome = action.payload;
    },
    setTotalIncome: (state, action) => {
      state.totalIncome = action.payload;
    },
    setTotalExpenses: (state, action) => {
      state.totalExpenses = action.payload;
    },
    setCashflow: (state, action) => {
      state.cashflow = action.payload;
    },
    setTaxes: (state, action) => {
      state.taxes = action.payload;
    },
    setHomeMortgagePayment: (state, action) => {
      state.homeMortgagePayment = action.payload;
    },
    setSchoolLoanPayment: (state, action) => {
      state.schoolLoanPayment = action.payload;
    },
    setCarLoanPayment: (state, action) => {
      state.carLoanPayment = action.payload;
    },
    setCreditCardPayment: (state, action) => {
      state.creditCardPayment = action.payload;
    },
    setOtherExpenses: (state, action) => {
      state.otherExpenses = action.payload;
    },
    setPerChildExpense: (state, action) => {
      state.perChildExpense = action.payload;
    },
    setNumOfChildren: (state, action) => {
      state.numOfChildren = action.payload * state.perChildExpense;
    },
    setBankLoanPayment: (state, action) => {
      state.bankLoanPayment = action.payload;
    },
    setBankLoan: (state, action) => {
      state.bankLoan = action.payload;
    },
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
} = gameInfoSlice.actions;

export default gameInfoSlice.reducer;
