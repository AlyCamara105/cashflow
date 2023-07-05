import Image from "next/image";
import { Inter } from "next/font/google";
import CustomInput from "@/components/CustomInput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <CustomInput type="number" />
        </div>
        +
        <div className="flex justify-between">
          <h1>Passive Income:</h1>
          <CustomInput type="number" />
        </div>
        =
        <div className="flex justify-between">
          <h1>Total Income:</h1>
          <CustomInput type="number" />
        </div>
        -
        <div className="flex justify-between">
          <h1>Total Expenses:</h1>
          <CustomInput type="number" />
        </div>
        =
        <div className="flex justify-between">
          <h1>Cash Flow:</h1>
          <h1>null</h1>
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
          <h1>Salary:</h1>
          <h1>null</h1>
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
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Home Mortgage Payment:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>School Loan Payment:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Car Loan Payment:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Credit Card Payment:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Other Expenses:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Per Child Expense:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1># of Children:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Bank Loan Payment:</h1>
          null
        </div>
      </div>

      {/* Assets Info  */}
      <div className="space-y-1 border border-gray-500 p-5">
        <div className="mb-5 text-center">
          <h1 className="font-extrabold">Assets</h1>
        </div>
        <div className="!mb-5 flex justify-between">
          <h1>Savings:</h1>
          <CustomInput type="number" />
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
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>School Loans:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Car Loans:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Credit Card Debt:</h1>
          <CustomInput type="number" />
        </div>
        <div className="flex justify-between">
          <h1>Bank Loan:</h1>
          <CustomInput type="number" />
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
            <CustomInput type="text" />
          </div>
          <div className="flex justify-between">
            <h1>Cost:</h1>
            <CustomInput type="number" />
          </div>
          <div className="flex justify-between">
            <h1>Mortgage:</h1>
            <CustomInput type="number" />
          </div>
          <div className="flex justify-between">
            <h1>Down Payment:</h1>
            <CustomInput type="text" />
          </div>
          <div className="flex justify-between">
            <h1>Cashflow:</h1>
            <CustomInput type="number" />
          </div>
          <button className="rounded-lg border border-black">
            Add Real Estate/Business
          </button>
        </div>
        <div className="!mt-5 flex flex-col space-y-1">
          <div className="flex justify-between">
            <h1>Name:</h1>
            <CustomInput type="text" />
          </div>
          <div className="flex justify-between">
            <h1># of Shares:</h1>
            <CustomInput type="number" />
          </div>
          <div className="flex justify-between">
            <h1>Cost/Share/Amount:</h1>
            <CustomInput type="number" />
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
