import React from "react";

import "./ThemeSwitcher.css";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../store/theme";

function ThemeSwitcher() {
  // const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const toggleTheme = (e) => {
    if (e.target.checked) {
      // setTheme("dark");
      dispatch(themeActions.doLight());
      // otherwise, it should be light
    } else {
      // setTheme("light");
      dispatch(themeActions.doDark());
    }
  };

  return (
    <>
      <div>Change the theme by using the below switch:</div>
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          onChange={toggleTheme}
          defaultChecked={theme === "light"}
        />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    </>
  );
}

export default ThemeSwitcher;
