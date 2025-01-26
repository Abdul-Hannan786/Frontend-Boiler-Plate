import type React from "react"
import { loanCategories } from "../utils/loanUtils"

interface LoanCategorySelectorProps {
  selectedCategory: string
  selectedSubcategory: string
  onCategoryChange: (category: string) => void
  onSubcategoryChange: (subcategory: string) => void
}

const LoanCategorySelector: React.FC<LoanCategorySelectorProps> = ({
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Loan Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {loanCategories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
          Loan Subcategory
        </label>
        <select
          id="subcategory"
          value={selectedSubcategory}
          onChange={(e) => onSubcategoryChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {loanCategories
            .find((category) => category.name === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default LoanCategorySelector

