import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LoanCardProps {
  id: string
  name: string
  maxLoan: number
  loanPeriod: number
  onClick: () => void
}

const LoanCard: React.FC<LoanCardProps> = ({ name, maxLoan, loanPeriod, onClick }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">Max Loan: PKR {maxLoan.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mb-4">Loan Period: Up to {loanPeriod} years</p>
        <Button onClick={onClick} className="w-full">
          Calculate Loan
        </Button>
      </CardContent>
    </Card>
  )
}

export default LoanCard

