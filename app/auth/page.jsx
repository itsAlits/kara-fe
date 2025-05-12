"use client";
import { useState } from "react";
import Btn from "../Components/Button/Btn";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password, name, activeTab });
  };

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="flex justify-center items-center bg-white p-8">
        <div className="w-full max-w-xl">
          <div className="form bg-white rounded-2xl p-8">
            <div className="header text-center mb-6">
              <h1 className="text-2xl font-medium">Welcome Back</h1>
              <p className="text-gray-500 mt-2">
                Welcome Back, Please Enter Your Details
              </p>
            </div>

            <div className="mb-6">
              <div className="flex bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`w-1/2 py-3 text-sm font-medium cursor-pointer rounded-lg transition-all duration-200 ${
                    activeTab === "signup"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`w-1/2 py-3 text-sm cursor-pointer font-medium rounded-lg transition-all duration-200 ${
                    activeTab === "signin"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Sign In
                </button>
              </div>
            </div>

            <div>
              {activeTab === "signup" && (
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
              )}

              <div className="mb-4">
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

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              {activeTab === "signin" && (
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a className="text-sm text-blue-600 hover:underline cursor-pointer">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}

              <Btn
                variant="btn-primary"
                text={activeTab === "signin" ? "Sign In" : "Sign Up"}
                onClick={handleSubmit}
              >
                {activeTab === "signin" ? "Sign In" : "Sign Up"}
              </Btn>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 bg-img hidden md:block"></div>
    </div>
  );
}
