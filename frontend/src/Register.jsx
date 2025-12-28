import React from "react";

function Register() {
  return (
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
  );
}

export default Register;
