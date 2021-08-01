import { NavLink, useHistory } from "react-router-dom";

import classes from "./NavBar.module.css";
import { selectUserEmail } from "../../store/user";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

import { auth } from "../../firebase";

const NavBar = () => {
  const userEmail = useSelector(selectUserEmail);
  const { theme } = useSelector((state) => state.theme);

  const history = useHistory();

  const signOutHandler = () => {
    auth.signOut().then(function () {
      // Sign-out successful.
      history.push("/");
    });
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active} exact>
              Home page
            </NavLink>
          </li>
          {userEmail && (
            <>
              <li>
                <NavLink
                  to="/smallComp/FormValid"
                  activeClassName={classes.active}
                >
                  Form validation
                </NavLink>
              </li>
              <li>
                <NavLink to="/themeSwitcher" activeClassName={classes.active}>
                  Theme switcher
                </NavLink>
              </li>
              <li>
                <NavLink to="/teamTasks" activeClassName={classes.active}>
                  Team tasks
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      {userEmail && (
        <div>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-tooltip-2">{userEmail}</Tooltip>}
          >
            <FaUserCircle />
          </OverlayTrigger>
          <Button
            variant={`outline-${theme}`}
            className={classes.userBtn}
            onClick={signOutHandler}
          >
            Logout
          </Button>
        </div>
      )}

      {!userEmail && (
        <nav>
          <NavLink to="/login" activeClassName={classes.active}>
            Authenticate to see more
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
