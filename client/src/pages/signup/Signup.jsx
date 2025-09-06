import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BhLogo from "../../assets/BhLogo.png";
import signbg from "../../assets/signbg.png";
import google from "../../assets/google.png";
import API from "../../api"; //The API helper

const Signup = () => {
  const navigate = useNavigate();

  // state for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false); // loader when submitting

  // handle text change for input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle signup form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // confirm password validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      // API call with axios
      const res = await API.post("/auth/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      // save token from backend
      localStorage.setItem("token", res.data.token);

      // For redirecting
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
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
              Join our community of home seekers and explore the possibilities
              that await.
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Let’s get started by filling out the information below.
            </p>

            {/* Signup Form */}
            <form className="" onSubmit={handleSubmit}>
              {/* First + Last name fields */}
              <label
                htmlFor="First Name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-green-600"
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-1/2 border rounded-md px-3 py-2 text-sm focus:outline-green-600"
                />
              </div>

              {/* Email */}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
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

              {/* Password + Confirm Password */}
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-green-600 mb-4"
              />
              <label
                htmlFor="confirm password"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-green-600 mb-4"
              />

              {/* Terms checkbox */}
              <label className="flex items-center gap-2 text-sm mb-4">
                <input
                  type="checkbox"
                  className="accent-green-600 mb"
                  required
                />
                I agree to the Terms of Service and Privacy Policies
              </label>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 text-white rounded-md py-2 font-medium"
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>

              {/* Divider */}
              <div className="flex items-center my-2">
                <hr className="flex-1 border-gray-300" />
                <span className="px-2 text-sm text-gray-500">or</span>
                <hr className="flex-1 border-gray-300" />
              </div>

              {/* Google auth (placeholder for now) */}
              <button
                type="button"
                className="w-full border flex items-center justify-center gap-2 rounded-md py-2 text-sm font-medium"
              >
                <img src={google} alt="Google" className="h-4 w-4" />
                Continue with Google
              </button>
            </form>

            {/* Link to login */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-green-700 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: background image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={signbg}
            alt="Sign up background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
