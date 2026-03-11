import { useState } from "react";
import "./index.css";

var EMAIL = "rakesh@crm.com";
var PASSWORD = "rakesh123";

var EmailIcon = function () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
};

var LockIcon = function () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
};

var EyeIcon = function () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

var EyeOffIcon = function () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
};

var AlertIcon = function () {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
};

var ChartIcon = function () {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
};

function Login({ onLoginSuccess }) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [showPassword, setShowPassword] = useState(false);
  var [rememberMe, setRememberMe] = useState(false);
  var [errorMsg, setErrorMsg] = useState("");
  var [loading, setLoading] = useState(false);

  function handleSignIn() {
    if (!email) {
      setErrorMsg("Please enter email .");
      return;
    }

    if (!password) {
      setErrorMsg("Please enter password.");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    setTimeout(function () {
      if (email === EMAIL && password === PASSWORD) {
        onLoginSuccess();
      } else {
        setErrorMsg(
          "Incorrect credentials. Please Try: rakesh@crm.com / rakesh123",
        );
        setEmail("");
        setPassword("");
        setLoading(false);
      }
    }, 700);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleSignIn();
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <div className="login-brand__icon">
            <ChartIcon />
          </div>
          <h1 className="login-brand__name">CRM Dashboard</h1>
          <p className="login-brand__tagline">
            Streamline your customer relations
          </p>
        </div>

        <div className="login-card">
          <h2 className="login-card__title">Welcome back</h2>
          <p className="login-card__subtitle">
            Please enter your details to sign in.
          </p>

          {errorMsg && (
            <div className="login-error">
              <span className="login-error__icon">
                <AlertIcon />
              </span>
              {errorMsg}
            </div>
          )}

          <div className="form-field">
            <label className="form-field__label">Email Address</label>
            <div className="form-field__wrap">
              <span className="form-field__icon">
                <EmailIcon />
              </span>
              <input
                type="email"
                placeholder="admin@crm.com"
                value={email}
                onChange={function (e) {
                  setEmail(e.target.value);
                }}
                onKeyPress={handleKeyPress}
                className="form-field__input"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-field__label">Password</label>
            <div className="form-field__wrap">
              <span className="form-field__icon">
                <LockIcon />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={function (e) {
                  setPassword(e.target.value);
                }}
                onKeyPress={handleKeyPress}
                className="form-field__input"
              />
              <button
                type="button"
                className="form-field__eye"
                onClick={function () {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <div className="login-row">
            <label className="login-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={function (e) {
                  setRememberMe(e.target.checked);
                }}
              />
              <span>Remember me</span>
            </label>
            <button className="login-forgot">Forgot password?</button>
          </div>

          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`login-submit ${loading ? "login-submit--loading" : ""}`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="login-divider">
            <span className="login-divider__line" />
            <span className="login-divider__text">OR CONTINUE WITH</span>
            <span className="login-divider__line" />
          </div>

          <div className="login-social">
            <button className="login-social__btn">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              Google
            </button>
            <button className="login-social__btn">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              SSO
            </button>
          </div>
        </div>

        <p className="login-bottom">
          Don't have an account?{" "}
          <button className="login-bottom__link">Contact Sales</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
