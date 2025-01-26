// components/Form.js
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useState } from "react";

interface Guarantor {
  name: string;
  email: string;
  location: string;
  cnic: string;
}

interface FormData {
  address: string;
  phone: string;
  guarantor1: Guarantor;
  guarantor2: Guarantor;
}

const Info = () => {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    phone: "",
    guarantor1: { name: "", email: "", location: "", cnic: "" },
    guarantor2: { name: "", email: "", location: "", cnic: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("guarantor1") || name.startsWith("guarantor2")) {
      const [guarantor, field] = name.split(".");

      // TypeScript understands that we are dealing with the right part of the state
      setFormData((prevFormData) => {
        // Ensure the guarantor field is of type `Guarantor` before spreading
        const updatedGuarantor = prevFormData[guarantor as keyof FormData] as Guarantor;

        return {
          ...prevFormData,
          [guarantor]: {
            ...updatedGuarantor, // Safely spread the existing guarantor data
            [field]: value,
          },
        };
      });
    } else {
      // Handle other fields
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Handle form submission, e.g., send data to an API
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Personal and Guarantor Information
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Guarantor 1 Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Guarantor 1 Information
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="guarantor1.name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="guarantor1.name"
                name="guarantor1.name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor1.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="guarantor1.email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="guarantor1.email"
                name="guarantor1.email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor1.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="guarantor1.location"
                className="block text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="guarantor1.location"
                name="guarantor1.location"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor1.location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="guarantor1.cnic" className="block text-gray-700">
                CNIC
              </label>
              <input
                type="text"
                id="guarantor1.cnic"
                name="guarantor1.cnic"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor1.cnic}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Guarantor 2 Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Guarantor 2 Information
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="guarantor2.name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="guarantor2.name"
                name="guarantor2.name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor2.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="guarantor2.email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="guarantor2.email"
                name="guarantor2.email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor2.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="guarantor2.location"
                className="block text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="guarantor2.location"
                name="guarantor2.location"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor2.location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="guarantor2.cnic" className="block text-gray-700">
                CNIC
              </label>
              <input
                type="text"
                id="guarantor2.cnic"
                name="guarantor2.cnic"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={formData.guarantor2.cnic}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
        <Link href={"/dashboard"}>
          <Button className="w-full">Proceed</Button>
        </Link>
      </form>
    </div>
  );
};

export default Info;
