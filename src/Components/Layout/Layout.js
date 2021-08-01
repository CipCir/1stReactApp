import React from "react";
import NavBar from "./NavBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
      <footer>
        <a
          href="https://github.com/CipCir/1stReactApp"
          target="_blank"
          rel="noreferrer"
          className={classes.footerLink}
        >
          See source code
        </a>{" "}
      </footer>
    </>
  );
}

export default Layout;
