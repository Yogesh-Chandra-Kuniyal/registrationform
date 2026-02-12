import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";

export default function SignUpForm() {

  const [submittedUser, setSubmittedUser] = useState(null);



  const [user, setUser] = useState({
    erpId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      return setError("All fields are required");
    }

    if (user.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (user.password !== user.confirmPassword) {
      return setError("Passwords do not match");
    }

    setError("");

    try {
      const payload = { ...user };
      delete payload.confirmPassword;

      await axios.post("http://localhost:5000/users", payload);

      setSubmittedUser(payload);

      alert("Signup Successful");

      // clear form
      setUser({
        erpId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });

    } catch (err) {
      console.log(err);
      setError("Signup failed");
    }
  };


  return (
    <div>
      <div className="boredr bg-gray-100 h-[95vh]">

        <div className="flex justify-center items-center h-5/6 bg-gray-100">
          <div className="relative w-105 h-155 overflow-hidden">


            <div
              className={`absolute w-full transition-all duration-700 ${submittedUser
                ? "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
                }`}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md space-y-4 h-155"
              >
                <h2 className="text-2xl font-bold text-center text-blue-600">
                  Create Account
                </h2>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <input
                  type="text"
                  name="erpId"
                  placeholder="ERP ID"
                  value={user.erpId}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />

                <div className="flex gap-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={user.firstName}
                    onChange={handleChange}
                    className="w-1/2 border px-3 py-2 rounded-lg"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={user.lastName}
                    onChange={handleChange}
                    className="w-1/2 border px-3 py-2 rounded-lg"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />

                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-lg"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </form>
            </div>



            <div
              className={`absolute top-0 w-full transition-all duration-700 ${submittedUser
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
                }`}
            >
              {submittedUser && (
                <div className="bg-white p-8 rounded-xl shadow-md border h-155 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                    Your Details
                  </h3>

                  <div className="space-y-3 text-gray-700">
                    <p><b>ERP ID:</b> {submittedUser.erpId}</p>
                    <p><b>First Name:</b> {submittedUser.firstName}</p>
                    <p><b>Last Name:</b> {submittedUser.lastName}</p>
                    <p><b>Email:</b> {submittedUser.email}</p>
                    <p><b>Phone:</b> {submittedUser.phone}</p>
                    <p><b>Gender:</b> {submittedUser.gender}</p>
                  </div>

                  <button
                    onClick={() => setSubmittedUser(null)}
                    className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Back
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>










    </div>
  );
}