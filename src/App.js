import { Switch, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import SmallComp from "./Pages/SmallComp";
import Home from "./Pages/Home";
import ThemeSwitcher from "./Pages/ThemeSwitcher";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Theme/theme";
import { GlobalStyles } from "./Components/Theme/global";

import { useEffect } from "react";
import Login from "./Pages/auth/Login";
import PassReset from "./Pages/auth/PassReset";
import Signup from "./Pages/auth/Signup";
import NotFound from "./Pages/NotFound";
import { selectUserEmail } from "./store/user";

import app from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, setUserLogOutState } from "./store/user";
import TeamTasks from "./Pages/TeamTasks";

export default function App() {
  const userEmail = useSelector(selectUserEmail);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        dispatch(
          setActiveUser({
            userEmail: user.email,
          })
        );
      } else {
        dispatch(setUserLogOutState());
      }
    });
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/passReset">
            <PassReset />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {userEmail && (
            <>
              {" "}
              <Route path="/smallComp/:compID">
                <SmallComp />
              </Route>
              <Route path="/themeSwitcher">
                <ThemeSwitcher />
              </Route>
              <Route path="/teamTasks">
                <TeamTasks />
              </Route>
            </>
          )}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}
