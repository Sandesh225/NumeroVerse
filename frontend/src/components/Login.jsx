import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginScheme = z.object({
  email: z.string().refine(
    (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameRegex = /^[a-zA-Z0-9]{7,}$/;
      return emailRegex.test(value) || usernameRegex.test(value);
    },
    {
      message: "Must be a valid email address or a username",
    }
  ),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginScheme),
  });

  const handleSubmission = (data) => {
    console.log(data);
    // Replace with your actual form submission logic
    navigate("/"); // Navigate to home after successful login (replace with your actual route)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleSubmission)} className="space-y-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              className={`border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter Email Address or Username"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="password"
              className="text-gray-700 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">
                Keep me signed in
              </label>
            </div>
            <Link
              to="/forgotpassword"
              className="text-indigo-500 hover:text-indigo-800"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Sign In
          </button>
          <div className="text-center text-gray-700 mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-500 hover:text-indigo-800"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
