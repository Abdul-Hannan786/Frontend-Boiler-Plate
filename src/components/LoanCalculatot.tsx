import type React from "react"
import { loanCategories, calculateLoan, formatCurrency, calculateProgress } from "../utils/loanUtils"

interface LoanCalculatorProps {
  selectedCategory: string
  selectedSubcategory: string
  initialDeposit: number
  loanAmount: number
  loanPeriod: number
  onInitialDepositChange: (value: number) => void
  onLoanAmountChange: (value: number) => void
  onLoanPeriodChange: (value: number) => void
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  selectedCategory,
  selectedSubcategory,
  initialDeposit,
  loanAmount,
  loanPeriod,
  onInitialDepositChange,
  onLoanAmountChange,
  onLoanPeriodChange,
}) => {
  const selectedCategoryData = loanCategories.find((category) => category.name === selectedCategory)

  const { totalLoan, monthlyPayment, totalPayment } = calculateLoan(initialDeposit, loanAmount, loanPeriod)

  const loanProgress = calculateProgress(loanAmount, selectedCategoryData?.maxLoan || loanAmount)

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="initialDeposit" className="block text-sm font-medium text-gray-700">
          Initial Deposit
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">PKR</span>
          </div>
          <input
            type="number"
            id="initialDeposit"
            value={initialDeposit}
            onChange={(e) => onInitialDepositChange(Number(e.target.value))}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0"
          />
        </div>
      </div>
      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
          Loan Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">PKR</span>
          </div>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => onLoanAmountChange(Number(e.target.value))}
            max={selectedCategoryData?.maxLoan || Number.POSITIVE_INFINITY}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0"
          />
        </div>
        {selectedCategoryData?.maxLoan && (
          <div className="mt-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>0</span>
              <span>{formatCurrency(selectedCategoryData.maxLoan)}</span>
            </div>
            <div className="mt-1 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-indigo-600 rounded-full" style={{ width: `${loanProgress}%` }}></div>
            </div>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="loanPeriod" className="block text-sm font-medium text-gray-700">
          Loan Period (Years)
        </label>
        <input
          type="range"
          id="loanPeriod"
          value={loanPeriod}
          onChange={(e) => onLoanPeriodChange(Number(e.target.value))}
          min="1"
          max={selectedCategoryData?.loanPeriod || 10}
          className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>1 year</span>
          <span>{loanPeriod} years</span>
          <span>{selectedCategoryData?.loanPeriod || 10} years</span>
        </div>
      </div>
    </div>
  )
}

export default LoanCalculator

