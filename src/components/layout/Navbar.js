import { Navbar, Button, Popover, OverlayTrigger, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";
import logo from "../../images/logo.svg";
import Avatar from "react-avatar";
import "./style.css";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

export const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h2" className="avatar">
        {auth.user.name}
      </Popover.Title>
      <Popover.Content className="logout-container">
        <div className="logout" onClick={onLogoutClick}>
          Logout
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Navbar fixed="top" bg="light">
        <Nav className="container-fluid">
          <Nav.Item>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Item className="ml-auto" style={{ marginRight: "20px" }}>
            {auth.isAuthenticated && (
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Avatar name={auth.user.name} size="40" round={true} />
              </OverlayTrigger>
            )}
          </Nav.Item>
        </Nav>
      </Navbar>
      {auth.isAuthenticated && (
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li>
              <a href="dashboard">
                <AiFillDashboard size={15} />
                Dashboard
              </a>
            </li>
            <li>
              <a style={{ marginTop: "610px" }} href="settings">
                <IoMdSettings size={15} />
                Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
