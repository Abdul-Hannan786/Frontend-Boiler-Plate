export const loanCategories = [
  {
    id: "wedding",
    name: "Wedding Loans",
    maxLoan: 500000,
    loanPeriod: 3,
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
  },
  {
    id: "home",
    name: "Home Construction Loans",
    maxLoan: 1000000,
    loanPeriod: 5,
    subcategories: ["Structure", "Finishing", "Loan"],
  },
  {
    id: "business",
    name: "Business Startup Loans",
    maxLoan: 1000000,
    loanPeriod: 5,
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
  },
  {
    id: "education",
    name: "Education Loans",
    maxLoan: 1000000, // Based on requirement
    loanPeriod: 4,
    subcategories: ["University Fees", "Child Fees Loan"],
  },
]

export const calculateLoan = (initialDeposit: number, loanAmount: number, loanPeriod: number) => {
  const totalLoan = loanAmount - initialDeposit
  const monthlyPayment = totalLoan / (loanPeriod * 12)
  const totalPayment = monthlyPayment * loanPeriod * 12

  return {
    totalLoan,
    monthlyPayment,
    totalPayment,
  }
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR" }).format(amount)
}

