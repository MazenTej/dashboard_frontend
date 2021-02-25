import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/actions/authActions";
import { withRouter } from "react-router";

import classnames from "classnames";
import { Button } from "react-bootstrap";

function Register() {
  const err = useSelector((state) => state.err);
  const auth = useSelector((state) => state.auth);

  const history = useHistory();
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  useEffect(() => {
    if (err) {
      setErrors(err);
    }
  }, [err]);

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      password2,
    };

    dispatch(registerUser(newUser, history));
  };

  useEffect(() => {
    setErrors({});
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            Back to home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={(e) => onChange(e)}
                value={name}
                error={errors.name}
                id="name"
                type="text"
                placeholder="Name"
                className={classnames("", {
                  invalid: errors.name,
                })}
              />
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => onChange(e)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Email"
                className={classnames("", {
                  invalid: errors.email,
                })}
              />
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => onChange(e)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Password"
                className={classnames("", {
                  invalid: errors.password,
                })}
              />
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => onChange(e)}
                value={password2}
                error={errors.password2}
                id="password2"
                type="password"
                placeholder="Confirm Password"
                className={classnames("", {
                  invalid: errors.password2,
                })}
              />
              <span className="red-text">{errors.password2}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Button
                variant="primary"
                type="submit"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Register);
