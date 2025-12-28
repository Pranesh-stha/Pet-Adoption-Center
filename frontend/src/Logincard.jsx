import React from "react";
import Register from "./Register";

function Logincard({
  credential,
  setCredential,
  logginIn,
  setShowLogin,
  wrongMsg,
  registry,
  setRegistry,
  regMsg,
  newUser
}) {
  function handelChange(event) {
    const { name, value } = event.target;
    setCredential((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="modal-overlay" id="loginModal">
      <div className="modal-card">
        <button
          className="modal-close"
          id="closeLoginModal"
          aria-label="Close login form"
          onClick={() => {
            setShowLogin(false);
          }}
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
                <input
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={credential.email}
                  onChange={handelChange}
                />
              </label>
              <label className="form-field">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="********"
                  name="password"
                  value={credential.password}
                  onChange={handelChange}
                />
              </label>
              <p>{wrongMsg}</p>
              <button
                type="button"
                className="primary-btn form-btn"
                onClick={logginIn}
              >
                Login
              </button>
              <button
                type="button"
                className="ghost-btn form-btn"
                id="adminLogin"
              >
                Login as admin
              </button>
            </form>
          </div>
          <div className="divider"></div>
          <Register registry={registry} setRegistry={setRegistry} regMsg={regMsg} newUser={newUser}/>
        </div>
      </div>
    </div>
  );
}

export default Logincard;
