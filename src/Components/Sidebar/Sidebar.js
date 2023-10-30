"use client";
import React, { memo, useMemo } from "react";
import styles from "./Sidebar.module.css";
import { AiOutlineStock } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiRightArrow, BiSearchAlt } from "react-icons/bi";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

import { toggleSidebar, setSelectedMenu } from "@/Redux/features/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  sidebarExploreMenuOptions,
  sidebarMenuOptions,
} from "@/Helpers/constants";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.sidebarState);
  const dispatch = useDispatch();
  console.log(useSelector((state) => state.sidebar.selectedSidebarMenu));

  return (
    <div
      className={`${styles.sidebar_container} ${
        !isSidebarOpen ? styles.sidebar_container_closed : null
      } flex-column justify-between align-start`}
    >
      <div
        className={`${styles.sidebar__logo} flex justify-between align-center`}
      >
        <div className={` flex justify-between align-center`}>
          <AiOutlineStock size={"1.5rem"} />
          {isSidebarOpen && <p style={{ marginLeft: "1rem" }}>GrowwStonks</p>}
        </div>

        <RxCross2
          color="var(--secondary-100)"
          onClick={() => dispatch(toggleSidebar())}
          size={"1.2rem"}
        />
      </div>
      <div
        className={`${styles.sidebar_content} flex-column justify-between align-start`}
      >
        <div className={`${styles.sidebar__top}`}>
          <SidebarMenu
            menuIcon={<BiSearchAlt size={"1.2rem"} />}
            menuName={"Search Stocks"}
          />
          <ExploreSubMenu />
        </div>
        <div
          className={`${styles.sidebar__bottom} flex justify-between align-center`}
        >
          <p>Change Theme?</p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

const SidebarMenu = ({ menuIcon, menuName, primary = true }) => {
  return (
    <div className={`${styles.sidebar__menu_container} flex-column`}>
      <Link
        href={"/"}
        className={`${styles.sidebar__menu_heading} ${
          primary ? styles.sidebar__menu_heading_primary : null
        } flex justify-start align-center`}
      >
        {menuIcon}
        <p className={`${styles.sidebar__menu_text} `}>{menuName}</p>
      </Link>
    </div>
  );
};

const ExploreSubMenu = () => {
  return (
    <div className={`${styles.sidebar__menu_container} flex-column`}>
      <Link
        href={"/explore/top_gainers"}
        className={`${styles.sidebar__menu_heading} flex justify-start align-center`}
      >
        <LuLayoutDashboard size={"1.2rem"} />
        <p className={`${styles.sidebar__menu_text} `}>Explore</p>
      </Link>

      {sidebarExploreMenuOptions.map((option, index) => {
        return (
          <Link
            href={option.link}
            className={`${styles.sidebar__menu_sub} `}
            key={index}
          >
            <BiRightArrow />
            <p className={`${styles.sidebar__menu_text} `}>{option.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default memo(Sidebar);
