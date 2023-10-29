"use client";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.css";
import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    console.log("this has beeen clicked", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className={`${styles.switch}`}>
      {/* <button onClick={()=> setTheme('light')}>light</button>
      <button onClick={()=> setTheme('dark')}>Dark</button> */}
      <input
        checked={theme === "dark" ? true : false}
        onChange={handleThemeSwitch}
        type="checkbox"
      />
      <span className={`${styles.slider}`} />
    </label>
  );
};

export default ThemeSwitcher;
