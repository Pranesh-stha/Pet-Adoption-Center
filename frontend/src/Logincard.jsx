import React from "react";

function Logincard({setLoginFalse}) {
  return (
    <div className="modal-overlay" id="loginModal">
      <div className="modal-card">
        <button
          className="modal-close"
          id="closeLoginModal"
          aria-label="Close login form"
          onClick={setLoginFalse}
        >
          &times;
        </button>
        <div className="modal-columns">
          <div className="modal-pane">
            <p className="eyebrow">Welcome back</p>
            <h3>Login</h3>
            <form className="modal-form">
              <label className="form-field">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label className="form-field">
                <span>Password</span>
                <input type="password" placeholder="********" />
              </label>
              <button type="button" className="primary-btn form-btn">
                Login
              </button>
              <button type="button" className="ghost-btn form-btn" id="adminLogin">
                Login as admin
              </button>
            </form>
          </div>
          <div className="divider"></div>
          <div className="modal-pane">
            <p className="eyebrow">New here?</p>
            <h3>Create account</h3>
            <form className="modal-form">
              <label className="form-field">
                <span>Full name</span>
                <input type="text" placeholder="Alex Kim" />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label className="form-field">
                <span>Password</span>
                <input type="password" placeholder="Create a password" />
              </label>
              <button type="button" className="primary-btn form-btn">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincard;
