// src/pages/login/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BhLogo from "../../assets/BhLogo.png";
import signbg from "../../assets/signbg.png";
import google from "../../assets/google.png";
import API from "../../api"; 

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use API helper instead of fetch
      const res = await API.post("/auth/login", formData);

      // save token
      localStorage.setItem("token", res.data.token);

      // redirect
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* LEFT SIDE: form section */}
        <div className="w-full md:w-1/2 flex justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="rounded-full flex items-center justify-center h-6 w-6"
                style={{ backgroundColor: "#FEFEFF" }}
              >
                <img src={BhLogo} alt="BetaHouse Logo" className="h-3 w-4" />
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl font-bold mb-2">
              Welcome Back to BetaHouse!
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Let's get started by filling out the information below
            </p>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <label className="block text-sm font-medium text-black-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-green-600 mb-4"
              />

              {/* Password */}
              <label className="block text-sm font-medium text-black-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-green-600 mb-4"
              />

              {/* Remember Me + Forgot password */}
              <div className="flex items-center justify-between text-sm mb-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" /> Remember Me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-green-700 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-md py-2 font-medium"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Divider */}
              <div className="flex items-center my-2">
                <hr className="flex-1 border-gray-300" />
                <span className="px-2 text-sm text-gray-500">or</span>
                <hr className="flex-1 border-gray-300" />
              </div>

              {/* Google auth placeholder */}
              <button
                type="button"
                className="w-full border flex items-center justify-center gap-2 rounded-md py-2 text-sm font-medium"
              >
                <img src={google} alt="Google" className="h-4 w-4" />
                Continue with Google
              </button>
            </form>

            {/* Link to signup */}
            <p className="text-sm text-gray-600 text-center mt-4">
              New User{" "}
              <Link to="/auth/signup" className="text-green-700 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: background image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={signbg}
            alt="Login background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
