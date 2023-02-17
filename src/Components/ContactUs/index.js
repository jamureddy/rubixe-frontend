import { useState } from "react";
import React from "react";
import "./index.css";
import { MdTouchApp } from "react-icons/md";
import registration from "../../DataConnectors/registration";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });
  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });
  const [loader, setLoader] = useState(false);

  /**
   * Update state text
   */
  const onChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Form validation
   */
  const validate = (values) => {
    const emailRegex = /.+@.+\.[A-Za-z]+$/;
    const nameRegex = /^[A-Za-z ]+$/;
    const mobileRegex = /^([+]\d{2})?\d{10}$/;
    const error = {};
    if (!values.fullName) {
      error.fullName = "Name is required";
    } else if (!nameRegex.test(values.fullName)) {
      error.fullName = "Name must contain only alphabets ";
    } else {
      error.fullName = true;
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      error.email = "Email is not valid ";
    } else {
      error.email = true;
    }
    if (!values.mobile) {
      error.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(values.mobile)) {
      error.mobile = "Mobile number invalid, It should be of 10 digits";
    } else {
      error.mobile = true;
    }
    return error;
  };

  /**
   *  On form submit
   *
   */
  const onSubmitContactForm = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    insertData(validate(formValues));
  };
  const toastShower = async (response) => {
    if (response.status === 200) {
      return await toast("Email already exists", {
        icon: "📧",
        duration: 4000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (response.status === 201) {
      return await toast.success("User created", {
        duration: 4000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      return await toast.error("Error occures ,try again", {
        duration: 4000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  /** insert data */
  const insertData = async (currentFormValues) => {
    if (
      currentFormValues.fullName === true &&
      currentFormValues.email === true &&
      currentFormValues.mobile === true
    ) {
      setLoader(true);
      const toastLoader = toast.loading("Processing...", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      const response = await registration(formValues);
      toast.remove(toastLoader);
      await toastShower(response);
      setLoader(false);
      setFormValues({ fullName: "", email: "", mobile: "" });
      setFormError({ fullName: "", email: "", mobile: "" });
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-9 contact-us-section m-auto">
            <div className="row">
              <div className="col-md-4 col-12 contact-us-section-content">
                <h3 className="text-align-center font-weight-bold">
                  GET IN TOUCH <MdTouchApp />
                </h3>
                <p>Please complete the form and we will get back to you</p>
              </div>
              <div className="col-md-7 col-12 contact-form-main">
                <form className="pt-3 pt-md-0">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="font-weight-bold"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formError.fullName === "" ||
                        formError.fullName === undefined
                          ? ""
                          : formError.fullName === true
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                      id="nameElement"
                      aria-describedby="emailHelp"
                      placeholder="Enter your name"
                      name="fullName"
                      onChange={onChangeInput}
                      value={formValues.fullName}
                      required
                    />
                  </div>
                  <p className="error-message">{formError.fullName}</p>

                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="font-weight-bold"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        formError.email === "" || formError.email === undefined
                          ? ""
                          : formError.email === true
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      name="email"
                      value={formValues.email}
                      onChange={onChangeInput}
                      required
                    />
                  </div>
                  <p className="error-message">{formError.email}</p>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="font-weight-bold"
                    >
                      Mobile *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formError.mobile === "" ||
                        formError.mobile === undefined
                          ? ""
                          : formError.mobile === true
                          ? "is-valid"
                          : "is-invalid"
                      }`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your mobile"
                      name="mobile"
                      value={formValues.mobile}
                      onChange={onChangeInput}
                      required
                    />
                  </div>
                  <p className="error-message">{formError.mobile}</p>
                  <button
                    type="submit"
                    onClick={onSubmitContactForm}
                    className="btn-register"
                    disabled={!loader ? false : true}
                  >
                    {!loader ? (
                      "Register Now"
                    ) : (
                      <div>
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Processing....
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
