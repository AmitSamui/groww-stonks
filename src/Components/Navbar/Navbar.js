"use client";
import React from "react";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/Redux/features/sidebarSlice";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/hooks/windowSize";

const Navbar = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

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
      {path !== "/" && <SearchBar />}

      {windowSize.width >= 500 && <ThemeSwitcher />}
    </div>
  );
};

export default Navbar;
