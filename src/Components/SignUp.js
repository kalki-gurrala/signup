import React, { useEffect, useState } from "react";
import "./SignUp.css";

function SignUp() {
  const initialValues = {
    fullname: "",
    email: "",
    companyname: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  //   useEffect(() => {
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     }
  //   });
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordMatch =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    if (!values.fullname) {
      errors.fullname = "Fullname is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email Format";
    }
    if (!values.companyname) {
      errors.companyname = "Company is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 Characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "confirm password is Resquired";
    } else if (!passwordMatch.test(values.confirmpassword)) {
      errors.confirmpassword = "Password is not Matched";
    } else if (
      values.confirmpassword === "" ||
      values.confirmpassword !== values.password
    ) {
      errors.confirmpassword = "Passwoed Not Matched";
    }

    return errors;
  };
  return (
    <div className="app-form">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in SuccessFully</div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <h1>SignUp Form</h1>
        <div className="forms">
          <div className="field">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Your FullName"
              value={formValues.fullname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.fullname}</p>
          <div className="field">
            <label>Email Address *</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Company Name *</label>
            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              value={formValues.companyname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.companyname}</p>
          <div className="field">
            <label>Create Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Create Your Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Your Password"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmpassword}</p>

          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
