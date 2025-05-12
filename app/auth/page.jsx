"use client";
import { useState } from "react";
import Btn from "../Components/Button/Btn";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password, companyCode });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="flex justify-center items-center bg-white p-8">
        <div className="w-full max-w-2xl">
          <div className="form bg-white rounded-2xl p-8">
            <div className="header text-center mb-10">
              <h1 className="text-2xl font-medium">Welcome Back</h1>
              <p className="text-gray-500 mt-1">
                Welcome Back, Please Enter Your Details
              </p>
            </div>

            <div>
              <div className="flex gap-2 mb-4">
                <div className="w-full">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="w-full relative">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="companyCode"
                >
                  Company Code
                </label>
                <input
                  id="companyCode"
                  type="text"
                  value={companyCode}
                  onChange={(e) => setCompanyCode(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company Code"
                />
              </div>

              <Btn
                variant="btn-primary"
                text="Sign In"
                onClick={handleSubmit}
              ></Btn>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 bg-img hidden md:block"></div>
    </div>
  );
}
