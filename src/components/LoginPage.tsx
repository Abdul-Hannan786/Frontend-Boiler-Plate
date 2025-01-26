"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import axios from "axios";
// import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  // const user = useUserStore((state) => state.user);
  const router = useRouter()

  // Handle login form submit
  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { email, password }
      );

      console.log(response.data); // Debug the response
      if (response.data.isFirstLogin) {
        setIsFirstLogin(true); // Show the modal if it's the first login
      } else {
        console.log("First login not required, proceed normally");
        router.push("/info")
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Invalid credentials");
    }
  };

  // Handle password change
  // const handlePasswordChange = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BASE_URL}/auth/change-password`,
  //       {
  //         userId: user._id,
  //         newPassword,
  //       }
  //     );
  //     alert("Password updated successfully!");
  //     setIsFirstLogin(false);
  //     router.push("/info")
  //      // Close the modal and mark the firstLogin flag as false
  //   } catch (error) {
  //     console.error("Error updating password:", error);
  //     alert("Error updating password");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-green-800">
            Login
          </CardTitle>
          <CardDescription className="text-center text-green-600">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-green-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-green-300 focus:border-green-500 focus:ring-green-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-green-600 hover:text-green-800"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6 text-white">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
      {isFirstLogin && (
        <Dialog open={isFirstLogin} onOpenChange={setIsFirstLogin}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Label htmlFor="new-password" className="text-green-700">
                New Password
              </Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="border-green-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <DialogFooter>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Change Password
              </Button>
              <Button variant="outline" onClick={() => setIsFirstLogin(false)}>
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default LoginPage;

