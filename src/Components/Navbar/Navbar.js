"use client";
import React from "react";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/Redux/features/sidebarSlice";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.navbar_container} flex justify-between align-center`}
    >
      <BiMenu
        className={`${styles.nav__menu_button}`}
        onClick={() => {
          dispatch(toggleSidebar());
        }}
        size={"1.2rem"}
      />
      <SearchBar />
      <ThemeSwitcher />
    </div>
  );
};

export default Navbar;
