import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "buyer",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="border p-3 rounded-lg"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border p-3 rounded-lg"
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-3 rounded-lg"
          name="email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 rounded-lg"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
        />

        <div className="flex items-center mb-2">
          <input
            className="mr-2"
            type="radio"
            id="buyer"
            name="userType"
            value="buyer"
            checked={formData.userType === "buyer"}
            onChange={handleChange}
          />
          <label htmlFor="buyer">Buyer</label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-2"
            type="radio"
            id="seller"
            name="userType"
            value="seller"
            checked={formData.userType === "seller"}
            onChange={handleChange}
          />
          <label htmlFor="seller">Seller</label>
        </div>

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-3 rounded-lg"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
