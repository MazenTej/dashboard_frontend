import { Link, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export const Landing = () => {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, []);
  return (
    <div>
      <Link to="/login">
        <Button
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "60%",
          }}
        >
          login
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="light"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "30%",
          }}
        >
          register
        </Button>
      </Link>
    </div>

     <div style={{ height: "75vh" }} className="container valign-wrapper">
     <div className="row">
        <div className="col s12 center-align">
          <br />
           <div className="col s6">
     <Link
      to="/register"
   style={{
      width: "140px",
    borderRadius: "3px",
     letterSpacing: "1.5px",
    }}
     className="btn btn-large waves-effect waves-light hoverable blue accent-3"
     >
      Register
   </Link>
         </div>
         <div className="col s6">
     <Link
       to="/login"
    style={{
       width: "140px",
    borderRadius: "3px",
      letterSpacing: "1.5px",
     }}
       className="btn btn-large btn-flat waves-effect white black-text"
    >
       Log In
     </Link>
          </div>
       </div>
     </div>
    </div>
  );
};
