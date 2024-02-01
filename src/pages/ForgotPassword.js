import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const [logout, setLogout] = useState(false);
  const [userType, setUserType] = useState("student");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Placeholder for the API endpoint, replace with your actual endpoint
    const apiUrl = "/api/forgot";

    try {
      // Make API call to handle form submission logic
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userType,
          username,
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        // Handle error scenario if needed
        console.error(data.error);
      }
    } catch (error) {
      // Handle network error or other exceptions
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Error message */}
          {success && (
            <div className="alert alert-info">
              Reset Password link has been shared to your mail. Please check!
            </div>
          )}

          {/* Logout message */}
          {logout && (
            <div className="alert alert-info">You have been logged out.</div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="text"
              className="input-field"
              id="email"
              name="email"
              placeholder="Enter Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="submit-btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="form-group">
          <span>
            <Link to="/Signin">Login Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
