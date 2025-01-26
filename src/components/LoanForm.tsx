import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { calculateLoan, formatCurrency } from "../utils/loanUtils"

interface LoanFormProps {
  isOpen: boolean
  onClose: () => void
  onProceed: (loanDetails: {
    subcategory: string
    initialDeposit: number
    loanAmount: number
    loanPeriod: number
    totalLoan: number
    monthlyPayment: number
    totalPayment: number
  }) => void
  category: {
    name: string
    maxLoan: number
    loanPeriod: number
    subcategories: string[]
  }
}

const LoanForm: React.FC<LoanFormProps> = ({ isOpen, onClose, onProceed, category }) => {
  const [subcategory, setSubcategory] = useState(category.subcategories[0])
  const [initialDeposit, setInitialDeposit] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  const [loanPeriod, setLoanPeriod] = useState(1)

  const { totalLoan, monthlyPayment, totalPayment } = calculateLoan(initialDeposit, loanAmount, loanPeriod)

  const handleProceed = () => {
    onProceed({
      subcategory,
      initialDeposit,
      loanAmount,
      loanPeriod,
      totalLoan,
      monthlyPayment,
      totalPayment,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{category.name} Calculator</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subcategory" className="text-right">
              Subcategory
            </Label>
            <Select value={subcategory} onValueChange={setSubcategory}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select subcategory" />
              </SelectTrigger>
              <SelectContent>
                {category.subcategories.map((sub) => (
                  <SelectItem key={sub} value={sub}>
                    {sub}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="initialDeposit" className="text-right">
              Initial Deposit
            </Label>
            <Input
              id="initialDeposit"
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="loanAmount" className="text-right">
              Loan Amount
            </Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              max={category.maxLoan}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="loanPeriod" className="text-right">
              Loan Period
            </Label>
            <Select value={loanPeriod.toString()} onValueChange={(value) => setLoanPeriod(Number(value))}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select loan period" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: category.loanPeriod }, (_, i) => i + 1).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year} {year === 1 ? "year" : "years"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-semibold mb-2">Loan Summary</h4>
          <p>Total Loan: {formatCurrency(totalLoan)}</p>
          <p>Monthly Payment: {formatCurrency(monthlyPayment)}</p>
          <p>Total Payment: {formatCurrency(totalPayment)}</p>
        </div>
        <Button onClick={handleProceed}>Proceed</Button>
      </DialogContent>
    </Dialog>
  )
}

export default LoanForm

