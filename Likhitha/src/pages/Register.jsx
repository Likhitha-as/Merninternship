import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to Login page
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <br />
        <br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;