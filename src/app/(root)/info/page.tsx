// components/Form.js
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

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
  const router = useRouter()
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
        const updatedGuarantor = prevFormData[
          guarantor as keyof FormData
        ] as Guarantor;

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

    // Validation
    const { address, phone, guarantor1, guarantor2 } = formData;
    if (
      !address ||
      !phone ||
      !guarantor1.name ||
      !guarantor1.email ||
      !guarantor1.location ||
      !guarantor1.cnic ||
      !guarantor2.name ||
      !guarantor2.email ||
      !guarantor2.location ||
      !guarantor2.cnic
    ) {
      toast.error("All fields are required. Please fill in all the fields.");
      return;
    }

    // If validation passes
    toast.success("Form submitted successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Personal and Guarantor Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guarantor 1 Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="guarantor1.name">Name</Label>
              <Input
                id="guarantor1.name"
                name="guarantor1.name"
                value={formData.guarantor1.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guarantor1.email">Email</Label>
              <Input
                id="guarantor1.email"
                name="guarantor1.email"
                type="email"
                value={formData.guarantor1.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guarantor1.location">Location</Label>
              <Input
                id="guarantor1.location"
                name="guarantor1.location"
                value={formData.guarantor1.location}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guarantor1.cnic">CNIC</Label>
              <Input
                id="guarantor1.cnic"
                name="guarantor1.cnic"
                value={formData.guarantor1.cnic}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guarantor 2 Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="guarantor2.name">Name</Label>
              <Input
                id="guarantor2.name"
                name="guarantor2.name"
                value={formData.guarantor2.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guarantor2.email">Email</Label>
              <Input
                id="guarantor2.email"
                name="guarantor2.email"
                type="email"
                value={formData.guarantor2.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guarantor2.location">Location</Label>
              <Input
                id="guarantor2.location"
                name="guarantor2.location"
                value={formData.guarantor2.location}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guarantor2.cnic">CNIC</Label>
              <Input
                id="guarantor2.cnic"
                name="guarantor2.cnic"
                value={formData.guarantor2.cnic}
                onChange={handleChange}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Info;
