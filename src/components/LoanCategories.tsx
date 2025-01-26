import type React from "react"
import { loanCategories } from "../utils/loanUtils"

interface LoanCategoriesProps {
  selectedCategory: string
  selectedSubcategory: string
  onCategoryChange: (category: string) => void
  onSubcategoryChange: (subcategory: string) => void
}

const LoanCategories: React.FC<LoanCategoriesProps> = ({
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Loan Categories</h2>
      {loanCategories.map((category) => (
        <div key={category.name} className="mb-4">
          <h3
            className={`text-xl font-semibold cursor-pointer ${
              selectedCategory === category.name ? "text-blue-600" : ""
            }`}
            onClick={() => onCategoryChange(category.name)}
          >
            {category.name}
          </h3>
          {selectedCategory === category.name && (
            <ul className="ml-4 mt-2">
              {category.subcategories.map((subcategory) => (
                <li
                  key={subcategory}
                  className={`cursor-pointer ${selectedSubcategory === subcategory ? "text-blue-600" : ""}`}
                  onClick={() => onSubcategoryChange(subcategory)}
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default LoanCategories

