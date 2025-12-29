import React from "react";

function Register({ registry, setRegistry, regMsg, newUser }) {
  function handelChange(event) {
    const { name, value } = event.target;
    setRegistry((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick(){
    console.log(registry)
    newUser()

    setRegistry({
    fName:"",
    email:"",
    password:""
  })
  }
  return (
    <div className="modal-pane">
      <p className="eyebrow">New here?</p>
      <h3>Create account</h3>
      <form className="modal-form">
        <label className="form-field">
          <span>Full name</span>
          <input
            type="text"
            placeholder="Alex Kim"
            name="fName"
            value={registry.fName}
            onChange={handelChange}
          />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            name="email"
            value={registry.email}
            onChange={handelChange}
          />
        </label>
        <label className="form-field">
          <span>Password</span>
          <input
            type="password"
            placeholder="Create a password"
            name="password"
            value={registry.password}
            onChange={handelChange}
          />
        </label>
        <p style={{color:"green"}}>{regMsg}</p>
        <button type="button" className="primary-btn form-btn" onClick={handleClick}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
