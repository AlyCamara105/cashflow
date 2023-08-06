import { Inter } from "next/font/google";
import CustomInput from "@/components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {
  setBankLoan,
  setCarLoanPayment,
  setCreditCardPayment,
  setRetailPayment,
  setHomeMortgagePayment,
  setNumOfChildren,
  setOtherExpenses,
  setPerChildExpense,
  setSalary,
  setSchoolLoanPayment,
  setTaxes,
  setBusinessName,
  setBusinessCost,
  setBusinessMortgage,
  setBusinessDownPayment,
  setBusinessCashflow,
  addBusiness,
  setStocksandfundsName,
  setStocksandfundsShareAmount,
  setStocksandfundsShares,
  addFund,
  addStock,
  removeBusiness,
  removeFund,
  removeStock,
} from "@/redux/gameInfoSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const salary = useSelector((state) => state.gameInfo.salary);
  const passiveIncome = useSelector((state) => state.gameInfo.passiveIncome);
  const totalIncome = useSelector((state) => state.gameInfo.totalIncome);
  const totalExpenses = useSelector((state) => state.gameInfo.totalExpenses);
  const cashflow = useSelector((state) => state.gameInfo.cashflow);
  const taxes = useSelector((state) => state.gameInfo.taxes);
  const homeMortgagePayment = useSelector(
    (state) => state.gameInfo.homeMortgagePayment
  );
  const schoolLoanPayment = useSelector(
    (state) => state.gameInfo.schoolLoanPayment
  );
  const carLoanPayment = useSelector((state) => state.gameInfo.carLoanPayment);
  const creditCardPayment = useSelector(
    (state) => state.gameInfo.creditCardPayment
  );
  const retailPayment = useSelector((state) => state.gameInfo.retailPayment);
  const otherExpenses = useSelector((state) => state.gameInfo.otherExpenses);
  const perChildExpense = useSelector(
    (state) => state.gameInfo.perChildExpense
  );
  const numOfChildren = useSelector((state) => state.gameInfo.numOfChildren);
  const bankLoanPayment = useSelector(
    (state) => state.gameInfo.bankLoanPayment
  );
  const bankLoan = useSelector((state) => state.gameInfo.bankLoan);
  const businesses = useSelector((state) => state.gameInfo.businesses);
  const funds = useSelector((state) => state.gameInfo.funds);
  const stocks = useSelector((state) => state.gameInfo.stocks);
  const dispatch = useDispatch();

  function AddBusiness() {
    dispatch(addBusiness());
  }

  function AddStock() {
    dispatch(addStock());
  }

  function AddFund() {
    dispatch(addFund());
  }

  function RemoveBusiness(businessName) {
    dispatch(removeBusiness(businessName));
  }

  function RemoveStock(stockName) {
    dispatch(removeStock(stockName));
  }

  function RemoveFund(fundName) {
    dispatch(removeFund(fundName));
  }

  return (
    <main>
      {/* Pofession and dream  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Profession and Dream</h1>
        </div>
        <div className="flex justify-between">
          <h1>Profession:</h1>
          <CustomInput type="text" />
        </div>
        <div className="flex justify-between">
          <h1>Dream:</h1>
          <CustomInput type="text" />
        </div>
      </div>

      {/* Cashflow Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Cashflow</h1>
        </div>
        <div className="flex justify-between">
          <h1>Salary:</h1>
          <CustomInput
            type="number"
            value={salary}
            setValueFunction={setSalary}
          />
        </div>
        +
        <div className="flex justify-between">
          <h1>Passive Income:</h1>${passiveIncome}
        </div>
        =
        <div className="flex justify-between">
          <h1>Total Income:</h1>${totalIncome}
        </div>
        -
        <div className="flex justify-between">
          <h1>Total Expenses:</h1>${totalExpenses}
        </div>
        =
        <div className="flex justify-between">
          <h1>Cash Flow:</h1>${cashflow}
        </div>
      </div>

      {/* Income Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Income</h1>
        </div>
        <div className="flex justify-between font-bold underline">
          <h1>Description</h1>
          <h1>Cashflow</h1>
        </div>
        <div className="flex justify-between">
          <h1>Salary:</h1>${salary}
        </div>
        <div className="underline">
          <h1>Interest/Dividends </h1>
        </div>
        <div className="flex flex-col">
          {funds.map((fund, index) => (
            <div className="flex justify-between" key={index}>
              <h1>{fund.Name}</h1>
              <h1>${fund.NumberOfShares * fund.ShareAmount}</h1>
            </div>
          ))}
        </div>
        <div className="underline">
          <h1>Real Estate/Business</h1>
        </div>
        <div className="flex flex-col">
          {businesses.map((business, index) => (
            <div className="flex justify-between" key={index}>
              <h1>{business.Name}</h1>
              <h1>${business.Cashflow}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Expenses Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Expenses</h1>
        </div>
        <div className="flex justify-between">
          <h1>Taxes:</h1>
          <CustomInput
            type="number"
            value={taxes}
            setValueFunction={setTaxes}
          />
        </div>
        <div className="flex justify-between">
          <h1>Home Mortgage Payment:</h1>
          <CustomInput
            type="number"
            value={homeMortgagePayment}
            setValueFunction={setHomeMortgagePayment}
          />
        </div>
        <div className="flex justify-between">
          <h1>School Loan Payment:</h1>
          <CustomInput
            type="number"
            value={schoolLoanPayment}
            setValueFunction={setSchoolLoanPayment}
          />
        </div>
        <div className="flex justify-between">
          <h1>Car Loan Payment:</h1>
          <CustomInput
            type="number"
            value={carLoanPayment}
            setValueFunction={setCarLoanPayment}
          />
        </div>
        <div className="flex justify-between">
          <h1>Credit Card Payment:</h1>
          <CustomInput
            type="number"
            value={creditCardPayment}
            setValueFunction={setCreditCardPayment}
          />
        </div>
        <div className="flex justify-between">
          <h1>Retail Payment:</h1>
          <CustomInput
            type="number"
            value={retailPayment}
            setValueFunction={setRetailPayment}
          />
        </div>
        <div className="flex justify-between">
          <h1>Other Expenses:</h1>
          <CustomInput
            type="number"
            value={otherExpenses}
            setValueFunction={setOtherExpenses}
          />
        </div>
        <div className="flex justify-between">
          <h1>Per Child Expense:</h1>
          <CustomInput
            type="number"
            value={perChildExpense}
            setValueFunction={setPerChildExpense}
          />
        </div>
        <div className="flex justify-between">
          <h1># of Children:</h1>
          <CustomInput
            type="number"
            value={numOfChildren * perChildExpense}
            setValueFunction={setNumOfChildren}
            form={true}
          />
        </div>
        <div className="flex justify-between">
          <h1>Bank Loan Payment:</h1>${bankLoanPayment}
        </div>
      </div>

      {/* Assets Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Assets</h1>
        </div>
        <div className="flex justify-between text-[10px] underline">
          <div className="w-1/3 text-center">
            <h1>Stocks/Funds/CDs/Etc:</h1>
          </div>
          <div className="w-1/3 text-center">
            <h1># of Shares/Amount:</h1>
          </div>
          <div className="w-1/3 text-center">
            <h1>Cost/Share/Amount:</h1>
          </div>
        </div>
        {stocks.map((stock, index) => (
          <div
            className="flex items-center justify-between text-[10px]"
            key={index}
          >
            <div className="w-1/3 text-center">
              <h1>{stock.Name}</h1>
            </div>
            <div className="w-1/3 text-center">
              <h1>{stock.NumberOfShares}</h1>
            </div>
            <div className="w-1/3 text-center">
              <h1>${stock.ShareAmount}</h1>
            </div>
            <button
              className="text-lg text-red-700"
              onClick={() => RemoveStock(stock.Name)}
            >
              X
            </button>
          </div>
        ))}
        {funds.map((fund, index) => (
          <div
            className="flex items-center justify-between text-[10px]"
            key={index}
          >
            <div className="w-1/3 text-center">
              <h1>{fund.Name}</h1>
            </div>
            <div className="w-1/3 text-center">
              <h1>{fund.NumberOfShares}</h1>
            </div>
            <div className="w-1/3 text-center">
              <h1>${fund.ShareAmount}</h1>
            </div>
            <button
              className="text-lg text-red-700"
              onClick={() => RemoveFund(fund.Name)}
            >
              X
            </button>
          </div>
        ))}
        <div className="flex justify-between text-[10px] underline">
          <div className="w-1/3 text-center">
            <h1>Real Estate/Business:</h1>
          </div>
          <div className="w-1/3 text-center">
            <h1>Down Payment:</h1>
          </div>
          <div className="w-1/3 text-center">
            <h1>Cost:</h1>
          </div>
        </div>
        {businesses.map((business, index) => (
          <div
            className="flex items-center justify-between text-[10px]"
            key={index}
          >
            <div className="w-1/3 text-center">
              <h1>{business.Name}</h1>
            </div>
            <div className="w-1/3 text-center">
              <h1>{business.DownPayment}</h1>
            </div>
            <div className="w-1/3 text-center">
              <h1>${business.Cost}</h1>
            </div>
            <button
              className="text-lg text-red-700"
              onClick={() => RemoveBusiness(business.Name)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Liabilities Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Liabilities</h1>
        </div>
        <div className="flex justify-between">
          <h1>Home Mortgage:</h1>
          <CustomInput type="number" noDescription={true} />
        </div>
        <div className="flex justify-between">
          <h1>School Loans:</h1>
          <CustomInput type="number" noDescription={true} />
        </div>
        <div className="flex justify-between">
          <h1>Car Loans:</h1>
          <CustomInput type="number" noDescription={true} />
        </div>
        <div className="flex justify-between">
          <h1>Credit Card Debt:</h1>
          <CustomInput type="number" noDescription={true} />
        </div>
        <div className="flex justify-between">
          <h1>Bank Loan:</h1>
          <CustomInput
            type="number"
            value={bankLoan}
            setValueFunction={setBankLoan}
          />
        </div>
        <div className="!mt-5 flex justify-between underline">
          <h1>Real Estate/Business</h1>
          <h1>Mortgage/Liability</h1>
        </div>
        {businesses.map((business, index) => (
          <div className="!mt-5 flex justify-between" key={index}>
            <h1>{business.Name}</h1>
            <h1>${business.Mortgage}</h1>
          </div>
        ))}
      </div>

      {/*  Buttons  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Buttons</h1>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <h1>Name:</h1>
            <CustomInput
              type="text"
              noDescription={true}
              form={true}
              setValueFunction={setBusinessName}
            />
          </div>
          <div className="flex justify-between">
            <h1>Cost:</h1>
            <CustomInput
              type="number"
              noDescription={true}
              form={true}
              setValueFunction={setBusinessCost}
            />
          </div>
          <div className="flex justify-between">
            <h1>Mortgage:</h1>
            <CustomInput
              type="number"
              noDescription={true}
              form={true}
              setValueFunction={setBusinessMortgage}
            />
          </div>
          <div className="flex justify-between">
            <h1>Down Payment:</h1>
            <CustomInput
              type="text"
              noDescription={true}
              form={true}
              setValueFunction={setBusinessDownPayment}
            />
          </div>
          <div className="flex justify-between">
            <h1>Cashflow:</h1>
            <CustomInput
              type="number"
              noDescription={true}
              form={true}
              setValueFunction={setBusinessCashflow}
            />
          </div>
          <button
            className="rounded-lg border border-black"
            onClick={AddBusiness}
          >
            Add Real Estate/Business
          </button>
        </div>
        <div className="!mt-5 flex flex-col space-y-1">
          <div className="flex justify-between">
            <h1>Name:</h1>
            <CustomInput
              type="text"
              noDescription={true}
              form={true}
              setValueFunction={setStocksandfundsName}
            />
          </div>
          <div className="flex justify-between">
            <h1># of Shares:</h1>
            <CustomInput
              type="number"
              noDescription={true}
              form={true}
              setValueFunction={setStocksandfundsShares}
            />
          </div>
          <div className="flex justify-between">
            <h1>Cost/Share/Amount:</h1>
            <CustomInput
              type="number"
              noDescription={true}
              form={true}
              setValueFunction={setStocksandfundsShareAmount}
            />
          </div>
          <button className="rounded-lg border border-black" onClick={AddStock}>
            Add Stocks/Etc
          </button>
          <button className="rounded-lg border border-black" onClick={AddFund}>
            Add Funds/CDs
          </button>
        </div>
      </div>
    </main>
  );
}
