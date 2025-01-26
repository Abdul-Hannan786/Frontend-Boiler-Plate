import type React from "react"
import { formatCurrency } from "../utils/loanUtils"

interface LoanSummaryProps {
  totalLoan: number
  monthlyPayment: number
  totalPayment: number
}

const LoanSummary: React.FC<LoanSummaryProps> = ({ totalLoan, monthlyPayment, totalPayment }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Loan Summary</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Loan</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formatCurrency(totalLoan)}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Monthly Payment</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formatCurrency(monthlyPayment)}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Payment</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formatCurrency(totalPayment)}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default LoanSummary

