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
    retailPayment: 0,
    otherExpenses: 0,
    perChildExpense: 0,
    numOfChildren: 0,
    bankLoanPayment: 0,
    bankLoan: 0,
    businesses: [],
    stocks: [],
    funds: [],
    businessName: "",
    businessCost: 0,
    businessMortgage: 0,
    businessDownPayment: 0,
    businessCashflow: 0,
    stockandfundsName: "",
    stocksandfundsShares: 0,
    stocksandfundsShareAmount: 0,
  },
  reducers: {
    setSalary: (state, action) => {
      state.salary = action.payload;
      gameInfoSlice.caseReducers.setTotalIncome(state);
    },
    setPassiveIncome: (state, action) => {
      let businessPassiveIncome = state.businesses.reduce(
        (passiveIncome, business) => passiveIncome + business.Cashflow,
        0
      );
      let fundsPassiveIncome = state.funds.reduce(
        (passiveIncome, fund) =>
          passiveIncome + fund.NumberOfShares * fund.ShareAmount,
        0
      );

      state.passiveIncome = businessPassiveIncome + fundsPassiveIncome;
      gameInfoSlice.caseReducers.setTotalIncome(state);
    },
    setTotalIncome: (state, action) => {
      state.totalIncome = state.salary + state.passiveIncome;
      gameInfoSlice.caseReducers.setCashflow(state);
    },
    setTotalExpenses: (state, action) => {
      state.totalExpenses =
        state.taxes +
        state.homeMortgagePayment +
        state.schoolLoanPayment +
        state.carLoanPayment +
        state.creditCardPayment +
        state.retailPayment +
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
    setRetailPayment: (state, action) => {
      state.retailPayment = action.payload;
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
      let newBusiness = {};
      newBusiness.Name = state.businessName;
      newBusiness.Cost = state.businessCost;
      newBusiness.Mortgage = state.businessMortgage;
      newBusiness.DownPayment = state.businessDownPayment;
      newBusiness.Cashflow = state.businessCashflow;
      newBusiness.TimeCreated = new Date();

      state.businesses.push(newBusiness);
      gameInfoSlice.caseReducers.setPassiveIncome(state);
    },
    setBusinessName: (state, action) => {
      state.businessName = action.payload;
    },
    setBusinessCost: (state, action) => {
      state.businessCost = action.payload;
    },
    setBusinessMortgage: (state, action) => {
      state.businessMortgage = action.payload;
    },
    setBusinessDownPayment: (state, action) => {
      state.businessDownPayment = action.payload;
    },
    setBusinessCashflow: (state, action) => {
      state.businessCashflow = action.payload;
    },
    setStocksandfundsName: (state, action) => {
      state.stocksandfundsName = action.payload;
    },
    setStocksandfundsShares: (state, action) => {
      state.stocksandfundsShares = action.payload;
    },
    setStocksandfundsShareAmount: (state, action) => {
      state.stocksandfundsShareAmount = action.payload;
    },
    addStock: (state, action) => {
      let newStock = {};
      newStock.Name = state.stocksandfundsName;
      newStock.NumberOfShares = state.stocksandfundsShares;
      newStock.ShareAmount = state.stocksandfundsShareAmount;
      newStock.TimeCreated = new Date();

      state.stocks.push(newStock);
    },
    addFund: (state, action) => {
      let newFund = {};
      newFund.Name = state.stocksandfundsName;
      newFund.NumberOfShares = state.stocksandfundsShares;
      newFund.ShareAmount = state.stocksandfundsShareAmount;
      newFund.TimeCreated = new Date();

      state.funds.push(newFund);
      gameInfoSlice.caseReducers.setPassiveIncome(state);
    },
    removeBusiness: (state, action) => {
      state.businesses = state.businesses.filter(
        (business) => business.TimeCreated != action.payload
      );

      console.log(state.businesses);

      gameInfoSlice.caseReducers.setPassiveIncome(state);
    },
    removeStock: (state, action) => {
      state.stocks = state.stocks.filter(
        (stock) => stock.TimeCreated != action.payload
      );

      gameInfoSlice.caseReducers.setPassiveIncome(state);
    },
    removeFund: (state, action) => {
      state.funds = state.funds.filter((fund) => fund.TimeCreated != action.payload);

      gameInfoSlice.caseReducers.setPassiveIncome(state);
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
  setRetailPayment,
  setOtherExpenses,
  setPerChildExpense,
  setNumOfChildren,
  setBankLoan,
  setBankLoanPayment,
  businesses,
  addBusiness,
  removeBusiness,
  setBusinessName,
  setBusinessCashflow,
  setBusinessCost,
  setBusinessMortgage,
  setBusinessDownPayment,
  setStocksandfundsName,
  setStocksandfundsShareAmount,
  setStocksandfundsShares,
  addStock,
  addFund,
  removeFund,
  removeStock,
} = gameInfoSlice.actions;

export default gameInfoSlice.reducer;
