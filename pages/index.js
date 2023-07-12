import Image from "next/image";
import { Inter } from "next/font/google";
import CustomInput from "@/components/CustomInput";
import { useSelector } from "react-redux";
import { setBankLoan, setCarLoanPayment, setCreditCardPayment, setHomeMortgagePayment, setNumOfChildren, setOtherExpenses, setPerChildExpense, setSalary, setSchoolLoanPayment, setTaxes } from "@/redux/gameInfoSlice";

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
  const otherExpenses = useSelector((state) => state.gameInfo.otherExpenses);
  const perChildExpense = useSelector(
    (state) => state.gameInfo.perChildExpense
  );
  const numOfChildren = useSelector((state) => state.gameInfo.numOfChildren);
  const bankLoanPayment = useSelector(
    (state) => state.gameInfo.bankLoanPayment
  );
  const bankLoan = useSelector((state) => state.gameInfo.bankLoan);

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
        <div className="flex underline">
          <h1>Interest/Dividends </h1>
        </div>
        <div className="flex underline">
          <h1>Real Estate/Business</h1>
        </div>
      </div>

      {/* Expenses Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Expenses</h1>
        </div>
        <div className="flex justify-between">
          <h1>Taxes:</h1>
          <CustomInput type="number" value={taxes} setValueFunction={setTaxes} />
        </div>
        <div className="flex justify-between">
          <h1>Home Mortgage Payment:</h1>
          <CustomInput type="number" value={homeMortgagePayment} setValueFunction={setHomeMortgagePayment} />
        </div>
        <div className="flex justify-between">
          <h1>School Loan Payment:</h1>
          <CustomInput type="number" value={schoolLoanPayment} setValueFunction={setSchoolLoanPayment} />
        </div>
        <div className="flex justify-between">
          <h1>Car Loan Payment:</h1>
          <CustomInput type="number" value={carLoanPayment} setValueFunction={setCarLoanPayment} />
        </div>
        <div className="flex justify-between">
          <h1>Credit Card Payment:</h1>
          <CustomInput type="number" value={creditCardPayment} setValueFunction={setCreditCardPayment} />
        </div>
        <div className="flex justify-between">
          <h1>Other Expenses:</h1>
          <CustomInput type="number" value={otherExpenses} setValueFunction={setOtherExpenses}/>
        </div>
        <div className="flex justify-between">
          <h1>Per Child Expense:</h1>
          <CustomInput type="number" value={perChildExpense} setValueFunction={setPerChildExpense}/>
        </div>
        <div className="flex justify-between">
          <h1># of Children:</h1>
          <CustomInput type="number" value={numOfChildren * perChildExpense} setValueFunction={setNumOfChildren}/>
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
        <div className="!mb-5 flex justify-between">
          <h1>Savings:</h1>
          <CustomInput type="number" noDescription={true} />
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
          <CustomInput type="number" value={bankLoan} setValueFunction={setBankLoan} />
        </div>
        <div className="!mt-5 flex justify-between underline">
          <h1>Real Estate/Business</h1>
          <h1>Mortgage/Liability</h1>
        </div>
      </div>

      {/*  Buttons  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Buttons</h1>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <h1>Name:</h1>
            <CustomInput type="text" noDescription={true} />
          </div>
          <div className="flex justify-between">
            <h1>Cost:</h1>
            <CustomInput type="number" noDescription={true} />
          </div>
          <div className="flex justify-between">
            <h1>Mortgage:</h1>
            <CustomInput type="number" noDescription={true} />
          </div>
          <div className="flex justify-between">
            <h1>Down Payment:</h1>
            <CustomInput type="text" noDescription={true} />
          </div>
          <div className="flex justify-between">
            <h1>Cashflow:</h1>
            <CustomInput type="number" noDescription={true} />
          </div>
          <button className="rounded-lg border border-black">
            Add Real Estate/Business
          </button>
        </div>
        <div className="!mt-5 flex flex-col space-y-1">
          <div className="flex justify-between">
            <h1>Name:</h1>
            <CustomInput type="text" noDescription={true} />
          </div>
          <div className="flex justify-between">
            <h1># of Shares:</h1>
            <CustomInput type="number" noDescription={true} />
          </div>
          <div className="flex justify-between">
            <h1>Cost/Share/Amount:</h1>
            <CustomInput type="number" noDescription={true} />
          </div>
          <button className="rounded-lg border border-black">
            Add Stocks/Etc
          </button>
          <button className="rounded-lg border border-black">
            Add Funds/CDs
          </button>
        </div>
      </div>
    </main>
  );
}
