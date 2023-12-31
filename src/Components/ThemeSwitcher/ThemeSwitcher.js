"use client";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.css";
import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className={`${styles.switch}`}>
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
