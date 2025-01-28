"use client";

import React, { useState } from "react";
import { loanCategories } from "../utils/loanUtils";
import LoanCard from "../components/LoanCard";
import LoanForm from "../components/LoanForm";
import UserInfoForm from "../components/UserInfoForm";
import toast from "react-hot-toast";
import axios from "axios";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof loanCategories)[0] | null
  >(null);
  const [isUserInfoFormOpen, setIsUserInfoFormOpen] = useState(false);
  const [loanDetails, setLoanDetails] = useState<LoanDetails | null>(null);
  const setUserFromStore = useUserStore((state) => state.saveUser);
  const router = useRouter();

  const handleCardClick = (category: (typeof loanCategories)[0]) => {
    setSelectedCategory(category);
  };

  const handleCloseLoanForm = () => {
    setSelectedCategory(null);
  };

  type LoanDetails = {
    subcategory: string;
    initialDeposit: number;
    loanAmount: number;
    loanPeriod: number;
    totalLoan: number;
    monthlyPayment: number;
    totalPayment: number;
  };

  const handleProceed = (details: LoanDetails) => {
    setLoanDetails(details);
    setIsUserInfoFormOpen(true);
  };

  const handleCloseUserInfoForm = () => {
    setIsUserInfoFormOpen(false);
  };

  const handleUserInfoSubmit = async (
    email: string,
    nic: string,
    name: string
  ) => {
    console.log("Loan application submitted:", {
      ...loanDetails,
      email,
      nic,
      name,
    });
    try {
      console.log(process.env.NEXT_PUBLIC_BASE_URL);
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`;
      console.log(apiUrl);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        {
          fullname: name,
          email,
          cnic: nic,
          loanDetails,
        }
      );
      toast.success(response.data.msg);
      console.log(response.data.data);
      router.push("/login");
      setUserFromStore(response.data.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.msg || "An error occurred. Please try again.";
        toast.error(errorMsg);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        console.error(error);
      }
    }
    setIsUserInfoFormOpen(false);
    setSelectedCategory(null);
    setLoanDetails(null);
  };

  return (
    <div className="min-h-screen">
      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Micro Finance App</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Welcome to Our Micro Finance Services
            </h2>
            <p className="text-gray-600">
              Explore our loan categories and manage your tasks all in one
              place. We&apos;re here to support your financial journey.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                Loan Categories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {loanCategories.map((category) => (
                  <LoanCard
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    maxLoan={category.maxLoan}
                    loanPeriod={category.loanPeriod}
                    onClick={() => handleCardClick(category)}
                  />
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      {selectedCategory && (
        <LoanForm
          isOpen={!!selectedCategory}
          onClose={handleCloseLoanForm}
          onProceed={handleProceed}
          category={selectedCategory}
        />
      )}
      <UserInfoForm
        isOpen={isUserInfoFormOpen}
        onClose={handleCloseUserInfoForm}
        onSubmit={handleUserInfoSubmit}
      />
    </div>
  );
}
