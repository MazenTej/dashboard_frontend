import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/actions/authActions";
import classnames from "classnames";
import { Button } from "react-bootstrap";

function Login() {
  const auth = useSelector((state) => state.auth);
  const err = useSelector((state) => state.err);
  const history = useHistory();

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
    if (err) {
      setErrors(err);
    }
  }, [err, auth.isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    const UserData = {
      email,
      password,
    };
    dispatch(loginUser(UserData));
  };

  useEffect(() => {
    setErrors({});
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            Back to home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Enter Email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Enter Password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
              />
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Button
                type="submit"
                variant="primary"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
