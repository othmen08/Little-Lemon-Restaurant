import React, { useState } from "react";
import "../components/Form.css";
import { Link } from "react-router-dom";


function Form() {
  // État pour basculer entre Login et Signup
  const [isLogin, setIsLogin] = useState(true);

  // État pour gérer la checkbox "Subscribe to newsletters"
  const [subscribeToNewsletters, setSubscribeToNewsletters] = useState(false);

  // Fonction pour basculer entre Login et Signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Fonction pour gérer le changement de la checkbox
  const handleCheckboxChange = (e) => {
    setSubscribeToNewsletters(e.target.checked);
  };

  return (
    <form className="form">
      <legend>{isLogin ? "Log in" : "Sign up"}</legend>

      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username..."
        />
      </div>

      {!isLogin && (
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
          />
        </div>
      )}

      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
        />
      </div>

      {!isLogin && (
        <div className="field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password..."
          />
        </div>
      )}

         {!isLogin && (
        <div className="field">
          <label htmlFor="newsletter" className="checkbox-label">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={subscribeToNewsletters}
              onChange={handleCheckboxChange}
            />
            Subscribe to newsletters
          </label>
        </div>
      )}

      <div className="field">
        <button className="btn_submit" type="submit">
          {isLogin ? "Log in" : "Join Little Lemon’s Family!"}
        </button>
        <span>
          <a href="/forgot-password">Forgot your password?</a>
        </span>
      </div>

      <div>
        <div className="field signupWith">
          <span>
            <a href="/google-login">
              <b>{isLogin ? "Continue with Google" : "Sign up with Google"}</b>
            </a>
          </span>
          <span>
            <a href="/apple-login">
              <b>{isLogin ? "Continue with Apple" : "Sign up with Apple"}</b>
            </a>
          </span>
        </div>
      </div>

      <div className="account">
        <span>
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
        </span>
        <Link className="Signup-link" to="/" onClick={toggleForm}>
          {isLogin ? "Sign up" : "Log in"}
        </Link>
      </div>
    </form>
  );
}

export default Form;